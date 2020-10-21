import React, { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";
import { CloseTag, LiTag, TagLabel } from "../StyledComp";

export default function TagStyledComponent({
    label,
    backgroundColor = "#709fb0",
    selectedTag,
    defaultTag,
    idx,
}) {
    const { dispatch } = useContext(MainSearchContext);
    return (
        <LiTag backgroundColor={backgroundColor} selected={selectedTag}>
            <TagLabel>{label}</TagLabel>

            {!defaultTag && (
                <CloseTag
                    onClick={(e) => {
                        dispatch({
                            type: actions.DELETE_TAG,
                            payload: { id: idx },
                        });
                    }}
                    selected={selectedTag}
                    backgroundColor={backgroundColor}
                >
                    &times;
                </CloseTag>
            )}
        </LiTag>
    );
}
