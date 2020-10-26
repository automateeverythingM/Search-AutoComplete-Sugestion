import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchAutoCompleteApp from "./components/SearchAutoComplete/SearchAutopCompleteApp";
import InputStyled from "./components/SearchAutoCompleteStyledComp/Input/InputStyled";
import AutoCompleteStyled from "./components/SearchAutoCompleteStyledComp/AutoComplete/AutoCompleteStyled";
import SearchACSC from "./components/SearchAutoCompleteStyledComp/SearchACSC";
import SeaechAppHolder from "./components/SearchAutoCompleteStyledComp/SeaechAppHolder";

function App() {
    return (
        <div className="App">
            <SeaechAppHolder />
        </div>
    );
}

export default App;
