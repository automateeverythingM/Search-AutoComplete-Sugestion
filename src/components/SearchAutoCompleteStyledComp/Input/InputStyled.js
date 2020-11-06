import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { GoSearch } from "react-icons/go";
import {
    addTag,
    clearAllInputs,
    popTag,
    resetState,
    setAllInputs,
    setAutoSuggestion,
    setInputValue,
    moveSelector,
    clearAutocompleteList,
    setCaseSensitiveSuggestion,
} from "../store/MainSearch/mainSearchReducer";
import {
    CloseButton,
    Input,
    InputWrapper,
    SearchButton,
    SearchInputs,
    Wrapper,
} from "../StyledComp";
import Selection from "../Selection/Selection";
function InputStyled({
    handleOnChange,
    suggestedWord,
    showDropdown,
    inputValue,
    autoSuggestion,
    clearAutocompleteList,
    addTag,
    popTag,
    resetState,
    setAllInputs,
    setAutoSuggestion,
    setInputValue,
    moveSelector,
    setCaseSensitive,
    caseSensitiveFill,
    dropdownSelector,
}) {
    const [backspaceDelay, setBackspaceDelay] = useState(true);
    const input = useRef();
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

        if (value.trim()) handleOnChange(value);
        setBackspaceDelay(false);
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
            if (dropdownSelector > -1) return;

            // if (dropdownSelector !== -1) return;
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
        //
        else if (event.key === "Escape") {
            console.log("handleKeyDown -> event.key", event.key);
            clearAutocompleteList();
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
        <Wrapper>
            <SearchInputs showDropdown={showDropdown}>
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
                        autoFocus
                    />
                </InputWrapper>
                <CloseButton
                    color="red"
                    show={inputValue.length}
                    onClick={handleClearInput}
                >
                    &times;
                </CloseButton>
            </SearchInputs>
            <Selection />
            <SearchButton showDropdown={showDropdown}>
                <GoSearch size="1.5em" />
            </SearchButton>
        </Wrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        autoSuggestion: state.autoSuggestion,
        caseSensitiveFill: state.caseSensitiveFillSuggestion,
        dropdownSelector: state.dropdownSelector,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAutoSuggestion: (value) => {
            dispatch(setAutoSuggestion(value));
        },
        setInputValue: (value) => dispatch(setInputValue(value)),
        clearAutocompleteList: () => dispatch(clearAutocompleteList()),
        clearAllInputs: () => dispatch(clearAllInputs()),
        setAllInputs: (value) => dispatch(setAllInputs(value)),
        popTag: () => dispatch(popTag()),
        addTag: (value) => dispatch(addTag(value)),
        resetState: () => dispatch(resetState()),
        moveSelector: (value) => dispatch(moveSelector(value)),
        setCaseSensitive: (value) =>
            dispatch(setCaseSensitiveSuggestion(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputStyled);
