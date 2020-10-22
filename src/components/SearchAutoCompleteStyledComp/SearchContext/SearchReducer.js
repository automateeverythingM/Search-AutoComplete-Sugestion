import produce from "immer";
import { moveSelector } from "./MoveSelector";
import { manageTagList, onDeleteHandler } from "./TagsManager";

export const actions = {
    MENAGE_TAG_LIST: "MENAGE_TAG_LIST",
    DELETE_TAG: "DELETE_TAG",
    POP_TAG: "POP_TAG",
    ADD_TAG: "ADD_TAG",
    MOVE_SELECTOR: "MOVE_SELECTOR",
    SET_SELECTOR: "SET_SELECTOR",
    SET_INPUT_VALUE: "SET_INPUT_VALUE",
    SET_AUTO_SUGGESTION: "SET_AUTO_SUGGESTION",
};

export default function searchReducer(state, action) {
    return produce(state, (draft) => {
        if (action.type === actions.MENAGE_TAG_LIST) {
            const { tagName } = action.payload;
            manageTagList(draft.tagList, tagName);
        } else if (action.type === actions.DELETE_TAG) {
            const { id } = action.payload;
            onDeleteHandler(draft.tagList, id);
        } else if (action.type === actions.POP_TAG) {
            draft.tagList.pop();
        } else if (action.type === actions.ADD_TAG) {
            const { tag } = action.payload;
            manageTagList(draft.tagList, tag);
        } else if (action.type === actions.MOVE_SELECTOR) {
            const { key } = action.payload;
            moveSelector(draft, key);
        } else if (action.type === actions.SET_SELECTOR) {
            const { index } = action.payload;
            draft.dropdownSelector = index;
        } else if (action.type === actions.SET_INPUT_VALUE) {
            const { value } = action.payload;
            draft.inputValue = value;
        } else if (action.type === actions.SET_AUTO_SUGGESTION) {
            const { value } = action.payload;
            draft.autoSuggestion = value;
        }

        // sortBy(draft.tagList, ["-selected", "-defaultTag", "label"]);
    });
}
