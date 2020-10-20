import styled from "styled-components";
import { darken } from "polished";
export const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    box-shadow: 1px 1px 2px #ddd;
    border-radius: 0.2em;
`;

export const Li = styled.li`
    display: block;
    text-align: ${(props) => props.textAlign || "left"};
    width: 100%;
    background-color: ${(props) => props.backgroundColor || "white"};
    padding: 0.5em 3em;
    z-index: 999;

    &:hover {
        background-color: ${(props) =>
            darken(0.1, props.backgroundColor || "white")};
    }
`;
