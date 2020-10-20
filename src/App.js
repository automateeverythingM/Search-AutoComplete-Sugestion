import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchAutoCompleteApp from "./components/SearchAutoComplete/SearchAutopCompleteApp";
import InputStyled from "./components/SearchAutoCompleteStyledComp/Input/InputStyled";
import AutoCompleteStyled from "./components/SearchAutoCompleteStyledComp/AutoComplete/AutoCompleteStyled";

function App() {
    const wordsToComplete = ["react", "javascript", "php", "ruby", "hypertext"];
    const suggestionWords = (input) => {
        return wordsToComplete.find((x) =>
            x.toLowerCase().startsWith(input.toLowerCase())
        );
    };
    return (
        <div className="App">
            <SearchAutoCompleteApp />
            <br />
            <div>
                <InputStyled size={"2em"} suggestedWord={suggestionWords} />
                <AutoCompleteStyled />
            </div>
        </div>
    );
}

export default App;
