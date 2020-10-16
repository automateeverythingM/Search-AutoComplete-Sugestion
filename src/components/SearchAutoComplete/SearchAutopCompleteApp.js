import React from "react";
import AutoComplete from "./AutoCompleteList/AutoComplete";
import Input from "./Input/Input";
import classes from "./style.module.css";

export default function SearchAutoCompleteApp() {
    const wordsToComplete = ["react", "javascript", "php", "ruby", "hypertext"];
    const suggestionWords = (input) => {
        return wordsToComplete.find((x) =>
            x.toLowerCase().startsWith(input.toLowerCase())
        );
    };
    return (
        <div className={classes.container}>
            <Input completeWord={suggestionWords} />
            {/* <div className={classes.horizontalLine} /> */}
            {/* <AutoComplete
                data={[
                    { label: "marko", id: "1" },
                    { label: "maria", id: "2" },
                ]}
            /> */}
        </div>
    );
}
