import React from "react";
import { Ul } from "../StyledComp";
import Tag from "./Tag";
import { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
export default function TagUl() {
    const {
        state: { tagList },
    } = useContext(MainSearchContext);
    
    return (
        <div>
            <Ul>
                {tagList.map((tag) => {
                    return (
                        <Tag
                            key={tag.id}
                            idx={tag.id}
                            label={tag.label}
                            backgroundColor={tag.backgroundColor}
                            selectedTag={tag.selected}
                            defaultTag={tag.defaultTag}
                        />
                    );
                })}
            </Ul>
        </div>
    );
}
