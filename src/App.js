import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchAutoCompleteApp from "./components/SearchAutoComplete/SearchAutopCompleteApp";
import InputStyled from "./components/SearchAutoCompleteStyledComp/Input/InputStyled";
import AutoCompleteStyled from "./components/SearchAutoCompleteStyledComp/AutoComplete/AutoCompleteStyled";
import SearchACSC from "./components/SearchAutoCompleteStyledComp/SearchACSC";

function App() {
    return (
        <div className="App">
            <br />
            <SearchACSC />
            <h3>Hello</h3>
        </div>
    );
}

export default App;
