import React from "react";
import { BaseButton } from "./Styles";
export default function Button(props) {
    return (
        <BaseButton {...props} darken color="white" background="darkgray">
            {props.children}
        </BaseButton>
    );
}
