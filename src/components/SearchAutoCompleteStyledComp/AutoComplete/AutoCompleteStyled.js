import React from "react";
import { Li, Ul } from "./StyledComponents";

export default function AutoCompleteStyled({ data = [] }) {
    return (
        <Ul>
            {data.map((item) => (
                <Li key={item.id} data-id={item.id}>
                    {item.name}
                </Li>
            ))}
        </Ul>
    );
}
