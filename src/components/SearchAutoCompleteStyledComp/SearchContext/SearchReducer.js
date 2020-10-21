import produce from "immer";
import sortBy from "../Helper/sortHelper";
import {
    manageTagList,
    onDeleteHandler,
    toggleTagHandler,
} from "./TagsManager";

export const actions = {
    MENAGE_TAG_LIST: "MENAGE_TAG_LIST",
    DELETE_TAG: "DELETE_TAG",
    TOGGLE_TAG: "TOGGLE_TAG",
    SET_FAKE_DATA: "SET_FAKE_DATA",
};

export default function searchReducer(state, action) {
    return produce(state, (draft) => {
        if ((action.type = actions.MENAGE_TAG_LIST)) {
            const { tagName } = action.payload;
            manageTagList(draft.tagList, tagName);
        }
        if ((action.type = actions.DELETE_TAG)) {
            const { id } = action.payload;
            onDeleteHandler(draft.tagList, id);
        }
        if ((action.type = actions.TOGGLE_TAG)) {
            const { id } = action.payload;
            toggleTagHandler(draft.tagList, id);
        }

        sortBy(draft.tagList, ["-selected", "-defaultTag", "label"]);
    });
}
