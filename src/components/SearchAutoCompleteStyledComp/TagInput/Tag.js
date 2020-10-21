import React from "react";
import { CloseTag, LiTag, TagLabel } from "../StyledComp";

export default function TagStyledComponent({
    label,
    backgroundColor = "#709fb0",
    selectedTag,
    defaultTag,
    toggleTagHandler,
    onDeleteHandler,
}) {
    return (
        <LiTag
            backgroundColor={backgroundColor}
            selected={selectedTag}
            onClick={toggleTagHandler}
        >
            <TagLabel>{label}</TagLabel>

            {!defaultTag && (
                <CloseTag
                    onClick={onDeleteHandler}
                    selected={selectedTag}
                    backgroundColor={backgroundColor}
                >
                    &times;
                </CloseTag>
            )}
        </LiTag>
    );
}
