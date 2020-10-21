import { nanoid as id } from "nanoid";

export function manageTagList(state, tagName) {
    //ako je prazno polje izlazimo iz funkcije
    if (!tagName) return;

    //trazimo da li vec postoji u tagListi tag sa istim imenom
    const tag = state.findIndex(
        (tag) => tag.label.toLowerCase() === tagName.toLowerCase()
    );

    //findIndex vraca -1 ako nije nasao nista
    if (tag >= 0) {
        return;
    } else {
        //novi tag sa id
        const newTag = {
            id: id(),
            label: tagName,
            selected: true,
            backgroundColor: "#131518",
            // "#" +
            // ("000000" + (Math.random() * 7216).toString(16)).slice(-6),
            defaultTag: false,
        };
        state.push(newTag);
        console.log(state);
    }
}

export function onDeleteHandler(state, id) {
    const index = state.findIndex((tag) => tag.id === id);
    state.splice(index, 1);
}

export function onBackSpace(state) {
    console.log("onBackSpace -> state", state);

    state.pop();
}

export function toggleTagHandler(state, id) {
    const tag = state.find((tag) => tag.id === id);
    tag.selected = !tag.selected;
}
