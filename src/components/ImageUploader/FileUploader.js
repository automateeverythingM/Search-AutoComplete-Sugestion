import React from "react";
import classes from "./style.module.css";
export default function FileUploader({ onChange, buttonText, previewImage }) {
    let inputRef;

    function triggerInput() {
        inputRef.click();
    }

    function uploadImage(event) {
        const file = event.target.files[0];
        if (!file) return;
        onChange(file);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                previewImage(reader.result);
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    return (
        <div className={classes.wrapper}>
            <button
                className={classes.button}
                type="button"
                onClick={triggerInput}
            >
                {buttonText}
            </button>
            <input
                className={classes.input}
                ref={(input) => (inputRef = input)}
                type="file"
                onChange={uploadImage}
            />
        </div>
    );
}

FileUploader.defaultProps = {
    buttonText: "Edit",
    onChange: () => {},
    previewImage: () => {},
};
