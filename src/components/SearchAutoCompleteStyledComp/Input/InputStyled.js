import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";
import { CloseButton, Input, InputWrapper, Wrapper } from "../StyledComp";
export default function InputStyled({
    size,
    prependIcon,
    handleOnChange,
    suggestedWord,
    dropDownStyle,
}) {
    //local state for input
    //autosugustion koji se dopunjuje
    const {
        state: { inputValue, autoSuggestion },
        dispatch,
    } = useContext(MainSearchContext);

    const input = useRef();
    //FIXME: treba da prepravim ovo i da napravim poseban metod
    const setValue = (action, value) =>
        dispatch({ type: action, payload: { value } });
    //appedndujemo na base word suggestion
    const appendSuggestion = (currentValue, suggestion) => {
        const toAppend = suggestion.slice(currentValue.length);
        currentValue += toAppend;
        return currentValue;
    };
    //NOTE: treba doraditi ovo ne potrebno komplikovano 
    useEffect(() => {
        if (inputValue === "") input.current.focus();
        //odlaganje treba da se osmisli neki alg
        let timer = setTimeout(() => {
            //saljemo vredonst na osnovu koje cemo dobiti suggestion
            const name = suggestedWord(inputValue);
            if (name === autoSuggestion) return;
            else if (!name) setValue(actions.SET_AUTO_SUGGESTION, "");
            else {
                setValue(
                    actions.SET_AUTO_SUGGESTION,
                    appendSuggestion(inputValue, name)
                );
            }
        }, 50);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    // set value and call call users handler
    const handleOnChangeInput = (event) => {
        //uzimamo vrednos inputa
        const value = event.target.value;

        //setujemo value na oba inputa
        setValue(actions.SET_INPUT_VALUE, value);

        //ako je prazan vracamo
        // if (!value) return;
        handleOnChange(value);
    };

    //clean input value
    const handleClearInput = (event) => {
        event.preventDefault();
        setValue(actions.CLEAR_INPUT);
    };

    //tab autoSuggest pass value to input field
    const handleKeyDown = (event) => {
        const inputvalue = event.target.value;
        if (event.key === "Tab") {
            event.preventDefault();
            autoSuggestion && setValue(actions.SET_INPUT_VALUE, autoSuggestion);
        }

        //
        else if (event.key === "Backspace" && !inputvalue) {
            dispatch({ type: actions.POP_TAG });
        }

        //
        else if (event.key === "Enter") {
            dispatch({
                type: actions.ADD_TAG,
                payload: { tag: inputvalue },
            });

            //
            setValue(actions.RESET_STATE);
        }

        //
        else if (event.key === "ArrowDown") {
            event.preventDefault();
            dispatch({
                type: actions.MOVE_SELECTOR,
                payload: { key: event.key },
            });
        }

        //
        else if (event.key === "ArrowUp") {
            event.preventDefault();
            dispatch({
                type: actions.MOVE_SELECTOR,
                payload: { key: event.key },
            });
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
