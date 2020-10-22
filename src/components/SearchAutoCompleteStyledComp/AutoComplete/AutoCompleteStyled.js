import React, { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";
import { Li, UlDropdown } from "../StyledComp";

export default function AutoCompleteStyled({ data = [] }) {
    const {
        state: { dropdownSelector },
        dispatch,
    } = useContext(MainSearchContext);
    console.log("AutoCompleteStyled -> dropdownSelector", dropdownSelector);
    return (
        <UlDropdown
            position="absolute"
            onClick={(e) => {
                dispatch({
                    type: actions.SET_SELECTOR,
                    payload: { index: e.target.dataset.id },
                });
            }}
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
                    onMouseEnter={(e) => {
                        dispatch({
                            type: actions.SET_SELECTOR,
                            payload: { index: e.target.dataset.id },
                        });
                    }}
                    data-id={index}
                >
                    {item.name}
                </Li>
            ))}
        </UlDropdown>
    );
}
