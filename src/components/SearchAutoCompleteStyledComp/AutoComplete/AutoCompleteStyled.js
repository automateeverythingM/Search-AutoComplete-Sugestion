import React, { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";
import { Li, UlDropdown } from "../StyledComp";

export default function AutoCompleteStyled() {
    const {
        state: { dropdownSelector, autocompleteList: data },
        dispatch,
    } = useContext(MainSearchContext);
    //resetujemo state zbog key pa posle setujemo input 
    //NOTE: trebalo bi da  napisem jedan metod za oba
    function onClickHandler(e) {
        dispatch({ type: actions.RESET_STATE });
        dispatch({
            type: actions.SET_INPUT_VALUE,
            payload: { value: e.target.innerText },
        });
    }

    return (
        <UlDropdown
            position="absolute"
            onClick={onClickHandler}
            onMouseLeave={(e) => {
                dispatch({
                    type: actions.SET_SELECTOR,
                    payload: { index: -1 },
                });
            }}
        >
            {data.map((item, index) => (
                <Li
                    selected={index === dropdownSelector}
                    key={item.code}
                    data-id={index}
                >
                    {item.name}
                </Li>
            ))}
        </UlDropdown>
    );
}
