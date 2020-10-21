import produce from "immer";
import sortBy from "../Helper/sortHelper";
import { manageTagList, onDeleteHandler } from "./TagsManager";

export const actions = {
    MENAGE_TAG_LIST: "MENAGE_TAG_LIST",
    DELETE_TAG: "DELETE_TAG",
    POP_TAG: "POP_TAG",
    ADD_TAG: "ADD_TAG",
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
        }

        // sortBy(draft.tagList, ["-selected", "-defaultTag", "label"]);
    });
}
