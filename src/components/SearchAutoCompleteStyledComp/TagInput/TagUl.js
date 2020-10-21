import React from "react";
import { Ul } from "../StyledComp";
import Tag from "./Tag";
export default function TagUl({ data, onDeleteHandler, toggleTagHandler }) {
    
    return (
        <div>
            <Ul>
                {data.map((tag) => (
                    <Tag
                        key={tag.id}
                        label={tag.label}
                        backgroundColor={tag.backgroundColor}
                        selectedTag={tag.selected}
                        defaultTag={tag.defaultTag}
                        toggleTagHandler={toggleTagHandler}
                        onDeleteHandler={(e) => {
                            e.stopPropagation();
                            onDeleteHandler(e, tag.id);
                        }}
                    />
                ))}
            </Ul>
        </div>
    );
}
