import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { CloseButton, Input, InputWrapper, Wrapper, Icon } from "../StyledComp";
export default function InputStyled({
    size,
    prependIcon = (
        <Icon color={"#555"}>
            <BiSearchAlt size={size} />
        </Icon>
    ),
    handleOnChange,
    suggestedWord,
}) {
    //local state for input
    const [inputValue, setInputValue] = useState("");
    //autosugustion koji se dopunjuje
    const [autoSuggestion, setAutoSuggestion] = useState("");
    const input = useRef();
    //appedndujemo na base word suggestion
    const appendSuggestion = (currentValue, suggestion) => {
        const toAppend = suggestion.slice(currentValue.length);
        currentValue += toAppend;
        return currentValue;
    };

    useEffect(() => {
        if (inputValue === "") input.current.focus();
    }, [inputValue]);

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

        console.log("handleOnChangeInput -> suggestedWord", suggestedWord);
        const wordsToComplete = suggestedWord(value);
        wordsToComplete &&
            setAutoSuggestion(appendSuggestion(value, wordsToComplete));
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
        }
    };
    return (
        <Wrapper size={size}>
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
