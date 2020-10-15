import React from "react";
import ListItem from "./ListItem";
import classes from "./style.module.css";
export default function AutoComplete({ data }) {
    return (
        <ul className={classes.lista}>
            {data.map((item) => (
                <ListItem key={item.id} label={item.label} id={item.id} />
            ))}
        </ul>
    );
}
