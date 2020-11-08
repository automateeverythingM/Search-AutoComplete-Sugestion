import React from "react";
import "./App.css";
import Buttons from "./components/Button";
import { Button } from "semantic-ui-react";
import SearchAppHolder from "./components/SearchAutoCompleteStyledComp/SearchAppHolder";
function App() {
    return (
        <div className="App">
            <SearchAppHolder />
            <Buttons
                darken
                color="white"
                background="darkgray"
                withFocus
                focusColor="#333"
                size="200px"
            >
                Primary
            </Buttons>
            <Button circular content="Primary" primary />
            <Button content="Secondary" secondary />
        </div>
    );
}

export default App;
