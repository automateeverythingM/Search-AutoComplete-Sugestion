import React from "react";
import SearchACSC from "./SearchACSC";
import { Banner, Jumbotron, TitleMsg } from "./StyledComp";
import TagUl from "./TagInput/TagUl";

export default function SearchAutoTags() {
    return (
        <Jumbotron>
            <Banner>Code Buddy</Banner>
            <TagUl />
            <SearchACSC />
        </Jumbotron>
    );
}
