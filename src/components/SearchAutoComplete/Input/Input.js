import React, { useState, useRef, useEffect } from "react";
import classes from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { render } from "@testing-library/react";
export default function Input({
    handleOnChange,
    handleOnSubmit,
    completeWord,
    SearchIcon = (
        <button onClick={handleOnSubmit} className={classes.btn}>
            <BiSearchAlt size={"3em"} className={classes.icon} />
        </button>
    ),
    ...props
}) {
    //local state for input
    const [inputValue, setInputValue] = useState("");
    //autosugustion koji se dopunjuje
    const [autoSuggestion, setAutoSuggestion] = useState("");
    const input = useRef();

    useEffect(() => {
        if (inputValue.length === 0) input.current.focus();
    }, [inputValue.length]);

    //appedndujemo na base word suggestion
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
        event.target.focus();
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
            className={[classes.wrapper].join(" ")}
        >
            {SearchIcon}
            <div className={classes.inputsWrapper}>
                <input
                    id="search"
                    className={classes.input}
                    autoComplete="off"
                    onChange={handleOnChangeInput}
                    ref={input}
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
                className={[
                    classes.btn,
                    classes.close,
                    !!inputValue.length ? classes.show : classes.hidden,
                ].join(" ")}
            >
                &times;
            </button>
        </form>
    );
}
