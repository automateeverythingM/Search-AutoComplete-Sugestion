import React, { useState } from "react";
import classes from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
export default function Input({
    handleOnChange,
    handleOnSubmit,
    completeWord,
    ...props
}) {
    //local state for input
    const [inputValue, setInputValue] = useState("");
    const [autoSuggestion, setAutoSuggestion] = useState("");

    const appendSuggestion = (currentValue, suggestion) => {
        const toAppend = suggestion.slice(currentValue.length);
        currentValue += toAppend;
        return currentValue;
    };

    // set value and call call users handler
    const handleOnChangeInput = (event) => {
        //uzimamo vrednos inputa
        const value = event.target.value;
        //setujemo value na oba inputa
        setInputValue(value);
        setAutoSuggestion(value);
        //ako je prazan vracamo
        if (!value) return;
        //saljemo vredonst na osnovu koje cemo dobiti suggestion
        //
        const wordsToComplete = completeWord(value);
        wordsToComplete &&
            setAutoSuggestion(appendSuggestion(value, wordsToComplete));
    };

    //Submit perventDefault();
    const handleOnSubmitInput = (event) => {
        event.preventDefault();
        console.log(event);
    };
    //clean input value
    const handleClearInput = (event) => {
        event.preventDefault();
        setInputValue("");
        setAutoSuggestion("");
    };

    //tab autoSuggest pass value to input field
    const handleKeyDown = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            autoSuggestion && setInputValue(autoSuggestion);
            return;
        }
    };
    return (
        <form
            onSubmit={handleOnSubmitInput}
            className={[classes.wrapper, classes.borderAdjust].join(" ")}
        >
            <button onClick={handleOnSubmit} className={classes.btn}>
                <BiSearchAlt size={"3em"} className={classes.icon} />
            </button>
            <div className={classes.inputsWrapper}>
                <input
                    id="search"
                    className={classes.input}
                    autoComplete="off"
                    onChange={handleOnChangeInput}
                    {...props}
                    value={inputValue}
                    onKeyDown={handleKeyDown}
                />
                <input
                    className={[
                        classes.autoSuggest,
                        classes.input,
                        classes.zIndex10,
                    ].join(" ")}
                    autoComplete="off"
                    value={autoSuggestion}
                    readOnly
                />
            </div>
            <button
                onClick={handleClearInput}
                className={[classes.btn, classes.close].join(" ")}
            >
                &times;
            </button>
        </form>
    );
}
