import React from "react";
import { useState } from "react";
import FileUploader from "./FileUploader";

export default function ImageWIthUploadButton() {
    const [file, setFile] = useState(null);
    const [imgPreview, setImgPreview] = useState(null);

    function imgPreviewHandler(img) {
        setImgPreview(img);
    }

    function onChangeHandler(file) {}

    return (
        <div>
            <img src={imgPreview} alt="avatar" />
            <FileUploader
                previewImage={imgPreviewHandler}
                onChange={onChangeHandler}
            />
        </div>
    );
}
