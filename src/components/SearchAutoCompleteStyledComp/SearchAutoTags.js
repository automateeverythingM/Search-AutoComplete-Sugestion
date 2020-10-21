import React, { useContext } from "react";
import SearchACSC from "./SearchACSC";
import { MainSearchContext } from "./SearchContext/SearchContext";
import TagUl from "./TagInput/TagUl";

export default function SearchAutoTags() {
    const { tagList } = useContext(MainSearchContext);
    return (
        <div>
            <TagUl />
            <SearchACSC />
        </div>
    );
}
