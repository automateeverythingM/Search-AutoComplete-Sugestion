import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import searchReducer from "./MainSearch/mainSearchReducer";
const store = createStore(
    searchReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function WrapperProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
