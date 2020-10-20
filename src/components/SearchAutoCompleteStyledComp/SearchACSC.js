import React from "react";
import AutoCompleteStyled from "./AutoComplete/AutoCompleteStyled";
import InputStyled from "./Input/InputStyled";
import mockStates from "../../mocks/inputAutoComplete";
import { useState } from "react";

export default function SearchACSC() {
    const [autocompleteList, setAutocompleteList] = useState([]);
    const suggestionWords = (input) => {
        const word = mockStates.find((x) =>
            x.name.toLowerCase().startsWith(input.toLowerCase())
        );

        return word ? word.name : null;
    };

    const onChange = (inputValue) => {
        fetch("");
    };
    return (
        <form>
            <InputStyled
                size={"2em"}
                suggestedWord={suggestionWords}
                onChange={onChange}
            />
            <AutoCompleteStyled />
        </form>
    );
}
