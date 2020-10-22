import React, { useContext } from "react";
import AutoCompleteStyled from "./AutoComplete/AutoCompleteStyled";
import InputStyled from "./Input/InputStyled";
import mockStates from "../../mocks/inputAutoComplete";
import { RelativeContainer } from "./StyledComp";
import { MainSearchContext } from "./SearchContext/SearchContext";
import { actions } from "./SearchContext/SearchReducer";

export default function SearchACSC() {
    const {
        state: { autocompleteList },
        dispatch,
    } = useContext(MainSearchContext);

    //Proveravamo da li je lista prazna
    const dropdown = !!autocompleteList.length;
    //Trazimo odgovarajucu rec za dopunu
    //NOTE: treba napraviti dobru logiku i snimati najcesce koriscene reci
    const suggestionWords = (input) => {
        if (!input?.trim()) return;
        const word = mockStates.find((x) =>
            x.name.toLowerCase().startsWith(input.toLowerCase())
        );

        return word ? word.name : null;
    };

    //trazimo listu iz api rute
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

                dispatch({
                    type: actions.SET_AUTOCOMPLETE_LIST,
                    payload: { value: finished },
                });
            });
    };

    return (
        <RelativeContainer>
            <InputStyled
                size={"3em"}
                suggestedWord={suggestionWords}
                handleOnChange={onChange}
                dropDownStyle={autocompleteList.length}
            />
            {dropdown && <AutoCompleteStyled/>}
        </RelativeContainer>
    );
}
