import React from "react";
import SearchAutoTags from "./SearchAutoTags";
import Provider from "./store/configStore";
import ContextProvider from "./SearchContext/SearchContext";
export default function SeaechAppHolder() {
    return (
        <ContextProvider>
            <Provider>
                <SearchAutoTags />
            </Provider>
        </ContextProvider>
    );
}
