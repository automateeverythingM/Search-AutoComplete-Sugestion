import React from "react";
import "./App.css";
import ImageUploaderWithPreview from "./components/ImageUploader/ImageUploaderWithPreview";
import SearchAppHolder from "./components/SearchAutoCompleteStyledComp/SearchAppHolder";
import ImageUploader from "react-images-upload";
function App() {
    return (
        <div className="App">
            <SearchAppHolder />
            <ImageUploaderWithPreview />
            <ImageUploader withPreview={true} />
        </div>
    );
}

export default App;
