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
import { debounce, throttle } from "loadsh";
function InputStyled({
    size,
    prependIcon,
    handleOnChange,
    suggestedWord,
    dropDownStyle,
    inputValue,
    autoSuggestion,
    addTag,
    popTag,
    resetState,
    setAllInputs,
    setAutoSuggestion,
    setInputValue,
    moveSelector,
}) {
    //local state for input
    const [caseSensitiveFill, setCaseSensitive] = useState("");
    const [backspaceDelay, setBackspaceDelay] = useState(true);
    const popinTags = debounce(popTag, 300);
    const input = useRef();
    let timer = useRef(null);
    //appedndujemo na base word suggestion

    const appendSuggestion = (currentValue, suggestion) => {
        const toAppend = suggestion.slice(currentValue.length);
        currentValue += toAppend;
        return currentValue;
    };

    const autoSuggestionManager = (value) => {
        const name = suggestedWord(value);

        if (name === autoSuggestion) return;
        else if (!name) setAutoSuggestion("");
        else {
            setAutoSuggestion(appendSuggestion(value, name));
            setCaseSensitive(name);
        }
    };

    //NOTE: treba doraditi ovo ne potrebno komplikovano
    useEffect(() => {
        if (inputValue === "") input.current.focus();
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        input.current.focus();
    }, []);

    // set value and call call users handler
    const handleOnChangeInput = (event) => {
        const value = event.target.value;

        setInputValue(value);
        autoSuggestionManager(value);
        setBackspaceDelay(false);

        //ako je prazan vracamo i cistimo listu ako je ostalo nesto
        // if (!value) {
        //     setAutocompleteList([]);
        //     return;
        // }
        handleOnChange(value);
    };

    //clean input value
    const handleClearInput = (event) => {
        event.preventDefault();
        resetState();
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
            // NOTE: previse brzo brise tagove ako se zadrzi key, mozda neki timeout

            if (backspaceDelay) {
                popTag();
            }
        }
        //add tag and reset all
        else if (event.key === "Enter") {
            addTag(currentInputValue);
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

    function handleKeyUp(event) {
        const currentInputValue = event.target.value;

        if (event.key === "Backspace" && !currentInputValue) {
            // NOTE: previse brzo brise tagove ako se zadrzi key, mozda neki timeout
            setBackspaceDelay(true);
        }
    }

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
                    onKeyUp={handleKeyUp}
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
        popTag: () => dispatch(popTag()),
        addTag: (value) => dispatch(addTag(value)),
        resetState: () => dispatch(resetState()),
        moveSelector: (value) => dispatch(moveSelector(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputStyled);
