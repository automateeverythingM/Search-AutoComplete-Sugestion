import React from "react";
import { Li, UlDropdown } from "../StyledComp";

export default function AutoCompleteStyled({ data = [] }) {
    return (
        <UlDropdown position="absolute">
            {data.map((item) => (
                <Li key={item.code} data-id={item.id}>
                    {item.name}
                </Li>
            ))}
        </UlDropdown>
    );
}
