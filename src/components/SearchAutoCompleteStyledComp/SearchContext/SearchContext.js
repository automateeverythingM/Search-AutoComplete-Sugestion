import React, { useReducer } from "react";
import reducer from "./SearchReducer";
import tagList from "../mocks/tagsMock";

//FIXME: treba da prepravim keycodes i da ih upotrebim
const initialState = {
    tagList: tagList,
    dropdownList: [],
    autocompleteList: [],
    tempInputValue: "",
    inputValue: "",
    autoSuggestion: "",
    dropdownSelector: -1,
    keyCodes: { 40: 1, 38: -1 },
    manageTagList: () => {},
    onDeleteHandler: () => {},
    toggleTagHandler: () => {},
    moveSelector: () => {},
    setInputValue: () => {},
    setAutoSuggestion: () => {},
    setAutocompleteList: () => {},
};

export const MainSearchContext = React.createContext({});
export default function SearchContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MainSearchContext.Provider value={{ state, dispatch }}>
            {children}
        </MainSearchContext.Provider>
    );
}
