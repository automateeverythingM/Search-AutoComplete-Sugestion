import React from "react";
import SearchACSC from "./SearchACSC";
import SearchAutoTags from "./SearchAutoTags";
import Provider from "./SearchContext/SearchContext";
export default function SeaechAppHolder() {
    return (
        <Provider>
            <SearchAutoTags />
        </Provider>
    );
}
