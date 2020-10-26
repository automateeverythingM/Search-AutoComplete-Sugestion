import React from "react";
import { Ul } from "../StyledComp";
import Tag from "./Tag";
import { connect } from "react-redux";
function TagUl({ tagList }) {
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
                        />
                    );
                })}
            </Ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tagList: state.tagList,
    };
};


export default connect(mapStateToProps)(TagUl);
