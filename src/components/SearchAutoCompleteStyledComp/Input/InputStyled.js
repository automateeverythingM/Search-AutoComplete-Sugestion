import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";

import { CloseButton, Input, InputWrapper, Wrapper, Icon } from "../StyledComp";
export default function InputStyled({
    size,
    prependIcon,
    handleOnChange,
    suggestedWord,
    dropDownStyle,
}) {
    //local state for input
    const [inputValue, setInputValue] = useState("");
    //autosugustion koji se dopunjuje
    const [autoSuggestion, setAutoSuggestion] = useState("");
    const { dispatch } = useContext(MainSearchContext);
    const input = useRef();
    //appedndujemo na base word suggestion
    const appendSuggestion = (currentValue, suggestion) => {
        const toAppend = suggestion.slice(currentValue.length);
        currentValue += toAppend;
        return currentValue;
    };

    useEffect(() => {
        if (inputValue === "") input.current.focus();

        let timer = setTimeout(() => {
            //saljemo vredonst na osnovu koje cemo dobiti suggestion
            const name = suggestedWord(inputValue);
            if (name === autoSuggestion) return;
            else if (!name) setAutoSuggestion("");
            else {
                setAutoSuggestion(appendSuggestion(inputValue, name));
            }
        }, 50);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);

    // set value and call call users handler
    const handleOnChangeInput = (event) => {
        //uzimamo vrednos inputa
        const value = event.target.value;

        //setujemo value na oba inputa
        setInputValue(value);

        //ako je prazan vracamo
        // if (!value) return;

        handleOnChange(value);
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
        } else if (event.key === "Backspace") {
            dispatch({ type: actions.POP_TAG });
        } else if (event.key === "Enter") {
            const value = event.target.value;
            dispatch({
                type: actions.ADD_TAG,
                payload: { tag: value },
            });

            setInputValue("");
            setAutoSuggestion("");
        }
    };
    return (
        <Wrapper size={size} dropDownStyle={dropDownStyle}>
            {prependIcon}
            <InputWrapper>
                <Input
                    type="text"
                    autoComplete="off"
                    value={inputValue}
                    onChange={handleOnChangeInput}
                    onKeyDown={handleKeyDown}
                    zIndex="50"
                    ref={input}
                />
                <Input
                    type="text"
                    readOnly
                    autoComplete="off"
                    value={autoSuggestion}
                    zIndex="20"
                    color="#d4d4d4"
                />
            </InputWrapper>
            <CloseButton
                color="red"
                show={inputValue.length}
                onClick={handleClearInput}
            >
                &times;
            </CloseButton>
        </Wrapper>
    );
}
