import React, { useState } from "react";
import classes from "./style.module.css";
export default function ImageUploaderWithPreview({ onChange, buttonText }) {
    const [avatarImg, setAvatarImg] = useState();

    let inputRef;

    function onChangeHandler(event) {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatarImg(reader.result);
            }
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    function triggerInput() {
        inputRef.click();
    }

    function uploadImage(event) {
        const file = event.target.files[0];
        console.log("uploadImage -> file", file);
        onChange(file);
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

ImageUploaderWithPreview.defaultProps = {
    buttonText: "Edit",
    onChange: () => {},
};
