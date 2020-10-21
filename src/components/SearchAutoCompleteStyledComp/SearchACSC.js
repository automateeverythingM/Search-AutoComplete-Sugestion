import React from "react";
import AutoCompleteStyled from "./AutoComplete/AutoCompleteStyled";
import InputStyled from "./Input/InputStyled";
import mockStates from "../../mocks/inputAutoComplete";
import { useState } from "react";
import { Form } from "./StyledComp";

export default function SearchACSC() {
    const [autocompleteList, setAutocompleteList] = useState([]);
    const dropdown = !!autocompleteList.length;
    const suggestionWords = (input) => {
        if (!input?.trim()) return;
        const word = mockStates.find((x) =>
            x.name.toLowerCase().startsWith(input.toLowerCase())
        );

        return word ? word.name : null;
    };

    const onChange = (inputValue) => {
        fetch("https://api.npoint.io/b12a6e7e85e8e63d54a2")
            .then((res) => res.json())
            .then((data) => {
                const result = data.filter((item) => {
                    return item.name
                        .toLowerCase()
                        .startsWith(inputValue.toLowerCase());
                });

                const finished = result.slice(0, 10);

                setAutocompleteList(finished);
            });
    };

    return (
        <Form>
            <InputStyled
                size={"2em"}
                suggestedWord={suggestionWords}
                handleOnChange={onChange}
                dropDownStyle={autocompleteList.length}
            />
            {dropdown && <AutoCompleteStyled data={autocompleteList} />}
        </Form>
    );
}
