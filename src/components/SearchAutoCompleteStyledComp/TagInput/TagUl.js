import React from "react";
import { Ul } from "../StyledComp";
import Tag from "./Tag";
import tags from "../../../mocks/tagsMock";
import { useContext } from "react";
import { MainSearchContext } from "../SearchContext/SearchContext";
import { actions } from "../SearchContext/SearchReducer";
export default function TagUl({ data, onDeleteHandler, toggleTagHandler }) {
    const {
        state: { tagList },
        dispatch,
    } = useContext(MainSearchContext);
    console.log("TagUl -> tagList", tagList);
    return (
        <div>
            <Ul>
                {tagList.map((tag) => {
                    console.log(tag);
                    return (
                        <Tag
                            key={tag.id}
                            label={tag.label}
                            backgroundColor={tag.backgroundColor}
                            selectedTag={tag.selected}
                            defaultTag={tag.defaultTag}
                            toggleTagHandler={toggleTagHandler}
                            onDeleteHandler={(e) => {
                                dispatch({
                                    type: actions.DELETE_TAG,
                                    payload: { id: tag.id },
                                });
                            }}
                        />
                    );
                })}
            </Ul>
        </div>
    );
}
