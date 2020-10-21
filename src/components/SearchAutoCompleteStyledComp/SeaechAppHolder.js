import React from "react";
import SearchACSC from "./SearchACSC";
import Provider from "./SearchContext/SearchContext";
export default function SeaechAppHolder() {
    return (
        <Provider>
            <SearchACSC />
        </Provider>
    );
}
