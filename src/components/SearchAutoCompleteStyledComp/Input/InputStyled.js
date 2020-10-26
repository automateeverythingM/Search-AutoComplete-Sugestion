import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
    addTag,
    clearAllInputs,
    popTag,
    resetState,
    setAllInputs,
    setAutocompleteList,
    setAutoSuggestion,
    setInputValue,
    moveSelector,
} from "../store/MainSearch/mainSearchReducer";
import { CloseButton, Input, InputWrapper, Wrapper } from "../StyledComp";

//
function InputStyled({
    size,
    prependIcon,
    handleOnChange,
    suggestedWord,
    dropDownStyle,
    inputValue,
    autoSuggestion,
    addTag,
    clearAllInputs,
    popTag,
    resetState,
    setAllInputs,
    setAutocompleteList,
    setAutoSuggestion,
    setInputValue,
    moveSelector,
}) {
    //local state for input
    const [caseSensitiveFill, setCaseSensitive] = useState("");

    //autosugustion koji se dopunjuje

    const input = useRef();

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
            else if (!name) setAutoSuggestion("");
            else {
                setAutoSuggestion(appendSuggestion(inputValue, name));
                setCaseSensitive(name);
            }
        }, 50);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    // set value and call call users handler
    const handleOnChangeInput = (event) => {
        //uzimamo vrednos inputa
        const value = event.target.value;

        //setujemo value
        setInputValue(value);

        //ako je prazan vracamo i cistimo listu ako je ostalo nesto
        if (!value) {
            //NOTE: treba probati sa proverom pre setovnja na prazno
            setAutocompleteList([]);
            return;
        }
        // spoljasnja promena
        handleOnChange(value);
    };

    //clean input value
    const handleClearInput = (event) => {
        event.preventDefault();
        clearAllInputs();
    };

    //tab autoSuggest pass value to input field
    const handleKeyDown = (event) => {
        const currentInputValue = event.target.value;
        if (event.key === "Tab") {
            event.preventDefault();
            //ako ima vredonst setujemo je

            autoSuggestion && setAllInputs(caseSensitiveFill);
        }

        //
        else if (event.key === "Backspace" && !currentInputValue) {
            //brisemo zadnje dodat tag
            popTag();
        }

        //add tag and reset all
        else if (event.key === "Enter") {
            addTag(currentInputValue);
            //
            resetState();
        }

        //pomera selektor
        else if (event.key === "ArrowDown") {
            event.preventDefault();
            moveSelector(event.key);
        }

        //
        else if (event.key === "ArrowUp") {
            event.preventDefault();
            moveSelector(event.key);
        }
    };

    //

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

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        autoSuggestion: state.autoSuggestion,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAutoSuggestion: (value) => {
            dispatch(setAutoSuggestion(value));
        },
        setInputValue: (value) => dispatch(setInputValue(value)),
        setAutocompleteList: (value) => dispatch(setAutocompleteList(value)),
        clearAllInputs: (value) => dispatch(clearAllInputs()),
        setAllInputs: (value) => dispatch(setAllInputs(value)),
        popTag: (value) => dispatch(popTag()),
        addTag: (value) => dispatch(addTag(value)),
        resetState: (value) => dispatch(resetState()),
        moveSelector: (value) => dispatch(moveSelector(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputStyled);
