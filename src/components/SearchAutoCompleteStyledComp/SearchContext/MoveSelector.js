export function moveSelector(state, key) {
    const keyCodes = { ArrowDown: 1, ArrowUp: -1 };

    let { dropdownSelector: current } = state;
    if (current === -1) {
        state.tempInputValue = state.inputValue;
    }
    current += keyCodes[key];
    if (current >= -1 && current < state.tagList.length) {
        state.dropdownSelector = current;
        if (current === -1) {
            state.inputValue = state.tempInputValue;
            state.autoSuggestion = state.tempInputValue;
        } else {
            state.inputValue = state.autocompleteList[current].name;
        }
    }
}
