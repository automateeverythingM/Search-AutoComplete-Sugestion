import React from "react";
import { connect } from "react-redux";
import {
    resetState,
    setInputValue,
    setSelector,
    setTempInputValue,
} from "../store/MainSearch/mainSearchReducer";
import { Li, UlDropdown } from "../StyledComp";

function AutoCompleteStyled({
    autocompleteList: data,
    dropdownSelector,
    setInputValue,
    resetState,
    setSelector,
}) {
    //resetujemo state zbog key pa posle setujemo input
    //NOTE: trebalo bi da  napisem jedan metod za oba
    function onClickHandler(e) {
        resetState();
        setInputValue(e.target.innerText);
    }

    return (
        <UlDropdown
            position="absolute"
            onClick={onClickHandler}
            onMouseLeave={(e) => {
                setSelector(-1);
            }}
        >
            {data.map((item, index) => (
                <Li
                    selected={index === dropdownSelector}
                    key={item.code}
                    data-id={index}
                    onMouseEnter={() => {
                        setSelector(index)
                        setTempInputValue()
                    }}
                >
                    {item.name}
                </Li>
            ))}
        </UlDropdown>
    );
}

const mapStateToProps = (state) => ({
    dropdownSelector: state.dropdownSelector,
    autocompleteList: state.autocompleteList,
});

const mapDispatchToProps = (dispatch) => ({
    setSelector: (index) => dispatch(setSelector(index)),
    resetState: () => dispatch(resetState()),
    setInputValue: (value) => dispatch(setInputValue(value)),
    setTempInputValue: () => dispatch(setTempInputValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteStyled);
