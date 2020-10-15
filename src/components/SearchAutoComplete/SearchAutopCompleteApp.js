import React from "react";
import AutoComplete from "./AutoCompleteList/AutoComplete";
import Input from "./Input/Input";
import classes from "./style.module.css";

export default function SearchAutoCompleteApp() {
    return (
        <div className={classes.container}>
            <Input autoSuggest={"Search"} />
            <div className={classes.horizontalLine} />
            <AutoComplete
                data={[
                    { label: "marko", id: "1" },
                    { label: "maria", id: "2" },
                ]}
            />
        </div>
    );
}
