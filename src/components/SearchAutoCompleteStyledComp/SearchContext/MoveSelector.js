export function moveSelector(state, key) {
    const keyCodes = { ArrowDown: 1, ArrowUp: -1 };

    let { dropdownSelector: current } = state;
    current += keyCodes[key];
    if (current >= -1 && current < state.tagList.length)
        state.dropdownSelector = current;
}
