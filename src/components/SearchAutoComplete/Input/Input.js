import React, { useState } from "react";
import classes from "./style.module.css";
import { BiSearchAlt } from "react-icons/bi";
export default function Input({
    handleOnChange,
    handleOnBlur,
    handleOnFocus,
    placeholderText = "Search",
    handleOnSubmit,
    autoSuggest,
    ...props
}) {
    const [inputValue, setInputValue] = useState("");

    const handleOnChangeInput = (event) => {
        setInputValue(event.target.value);
    };

    const handleOnSubmitInput = (event) => {
        event.preventDefault();
    };

    const handleClearInput = (event) => {
        event.preventDefault();
        setInputValue("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Tab") {
            event.preventDefault();
            autoSuggest && setInputValue(autoSuggest);
            return;
        }
    };
    return (
        <form
            onSubmit={handleOnSubmitInput}
            className={[classes.wrapper, classes.borderAdjust].join(" ")}
        >
            <button onClick={handleOnSubmit} className={classes.btn}>
                <BiSearchAlt size={"1.5em"} className={classes.icon} />
            </button>
            <div className={classes.inputsWrapper}>
                <input
                    id="search"
                    value={inputValue}
                    className={classes.input}
                    autoComplete="off"
                    onChange={handleOnChangeInput}
                    onBlur={handleOnBlur}
                    onFocus={handleOnFocus}
                    placeholder={placeholderText}
                    {...props}
                    onKeyDown={handleKeyDown}
                />
                <input
                    className={[
                        classes.autoSuggest,
                        classes.input,
                        classes.zIndex10,
                    ].join(" ")}
                    readOnly
                    value={autoSuggest}
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
