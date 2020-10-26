import React from "react";
import { connect } from "react-redux";
import { deleteTag } from "../store/MainSearch/mainSearchReducer";
import { CloseTag, LiTag, TagLabel } from "../StyledComp";

function TagStyledComponent({
    label,
    backgroundColor = "#709fb0",
    selectedTag,
    idx,
    deleteTag,
}) {
    return (
        <LiTag backgroundColor={backgroundColor} selected={selectedTag}>
            <TagLabel>{label}</TagLabel>
            <CloseTag
                onClick={() => {
                    deleteTag(idx);
                }}
                selected={selectedTag}
                backgroundColor={backgroundColor}
            >
                &times;
            </CloseTag>
        </LiTag>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTag: (id) => dispatch(deleteTag(id)),
    };
};
export default connect(null, mapDispatchToProps)(TagStyledComponent);
