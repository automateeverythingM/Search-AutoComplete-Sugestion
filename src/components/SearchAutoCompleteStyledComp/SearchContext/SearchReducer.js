import produce from "immer";
import moveSelector from "./MoveSelector";
import { manageTagList, onDeleteHandler } from "./TagsManager";

export const actions = {
    MENAGE_TAG_LIST: "MENAGE_TAG_LIST",
    DELETE_TAG: "DELETE_TAG",
    POP_TAG: "POP_TAG",
    ADD_TAG: "ADD_TAG",
    MOVE_SELECTOR: "MOVE_SELECTOR",
    SET_SELECTOR: "SET_SELECTOR",
    SET_AUTO_SUGGESTION: "SET_AUTO_SUGGESTION",
    SET_AUTOCOMPLETE_LIST: "SET_AUTOCOMPLETE_LIST",
    SET_INPUT_VALUE: "SET_INPUT_VALUE",
    CLEAR_INPUT: "CLEAR_INPUT",
    RESET_STATE: "RESET_STATE",
    SET_ALL_INPUTS: "SET_ALL_INPUTS",
};

export default function searchReducer(state, action) {
    return produce(state, (draft) => {
        //! TAGS
        if (action.type === actions.MENAGE_TAG_LIST) {
            const { tagName } = action.payload;
            manageTagList(draft.tagList, tagName);
        }
        //
        else if (action.type === actions.DELETE_TAG) {
            const { id } = action.payload;
            onDeleteHandler(draft.tagList, id);
        }
        //
        else if (action.type === actions.POP_TAG) {
            draft.tagList.pop();
        }
        //!SELECTOR ON AUTOCOMPLETE
        else if (action.type === actions.MOVE_SELECTOR) {
            const { key } = action.payload;
            moveSelector(draft, key);
        }
        //
        else if (action.type === actions.SET_SELECTOR) {
            const { index } = action.payload;
            draft.dropdownSelector = index;
        }
        //!INPUT MAUIPULATION
        else if (action.type === actions.SET_INPUT_VALUE) {
            const { value } = action.payload;
            draft.inputValue = value;
        }
        //
        else if (action.type === actions.SET_AUTO_SUGGESTION) {
            const { value } = action.payload;
            draft.autoSuggestion = value;
        }
        //
        else if (action.type === actions.SET_ALL_INPUTS) {
            const { value } = action.payload;
            draft.autoSuggestion = value;
            draft.inputValue = value;
        }
        //
        else if (action.type === actions.CLEAR_INPUT) {
            draft.autoSuggestion = "";
            draft.inputValue = "";
        }
        //
        else if (action.type === actions.SET_AUTOCOMPLETE_LIST) {
            const { value } = action.payload;
            draft.autocompleteList = value;
        }
        //
        else if (action.type === actions.RESET_STATE) {
            draft.autoSuggestion = "";
            draft.inputValue = "";
            draft.autocompleteList = [];
            draft.dropdownSelector = -1;
        }

        // sortBy(draft.tagList, ["-selected", "-defaultTag", "label"]);
    });
}
