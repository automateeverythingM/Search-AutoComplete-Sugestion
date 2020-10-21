import React, { useReducer } from "react";
import reducer from "./SearchReducer";
import { actions } from "./SearchReducer";
const initialState = {
    tagList: [],
    dropdownList: [],
    keyCodes: { 40: 1, 38: -1 },
    manageTagList: () => {},
    onDeleteHandler: () => {},
    toggleTagHandler: () => {},
};

export const MainSearchContext = React.createContext({});
export default function SearchContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        tagList: [...state.tagList],
        dropdownList: [...state.dropdownList],
        keyCodes: { ...state.keyCodes },
        manageTagList: (event, tagName) => {
            dispatch({
                type: actions.MENAGE_TAG_LIST,
                payload: { event, tagName },
            });
        },
        onDeleteHandler: (event, id) => {
            dispatch({ type: actions.DELETE_TAG, payload: { event, id } });
        },
        toggleTagHandler: (event, id) => {
            dispatch({ type: actions.TOGGLE_TAG, payload: { event, id } });
        },
    };
    return (
        <MainSearchContext.Provider value={value}>
            {children}
        </MainSearchContext.Provider>
    );
}
