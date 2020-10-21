import React from "react";
import {
    LiTag,
    TagLabel,
    CloseTag,
} from "../../../../../styled-components/sComponents";

import darkenColor from "../../../../../helper/helper";

export default function TagStyledComponent({
    label,
    backgroundColor = "#709fb0",
    selectedTag,
    defaultTag,
    toggleTagHandler,
    onDeleteHandler,
}) {
    const hoverColor = darkenColor(backgroundColor, 20);
    const boxShadowColorActive = darkenColor(hoverColor, 10);
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
                    boxShadowColor={hoverColor}
                    boxShadowColorActive={boxShadowColorActive}
                >
                    &times;
                </CloseTag>
            )}
        </LiTag>
    );
}
