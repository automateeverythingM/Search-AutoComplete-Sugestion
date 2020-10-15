import React from "react";

export default function ListItem({ label, id }) {
    return (
        <li>
            <label id={id}>{label}</label>
        </li>
    );
}
