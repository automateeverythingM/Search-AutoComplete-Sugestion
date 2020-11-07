import styled, { css } from "styled-components";
import { lighten, darken } from "polished";
export const BaseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    cursor: pointer;
    min-height: 1em;
    outline: none;
    border: none;
    vertical-align: baseline;
    background: ${(props) => props.background || "#ddd"};
    color: ${(props) => props.color};
    margin: 0 0.25em 0 0;
    padding: 0.8em 1.5em 0.8em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.3em;
    -webkit-user-select: none;
    user-select: none;
    transition: all 0.1s ease;
    ${(props) =>
        props.lighten &&
        css`
            &:hover {
                background: ${(props) => lighten(0.05, props.background)};
            }

            &:active {
                background: ${(props) => lighten(0.1, props.background)};
            }
        `}
    ${(props) =>
        props.darken &&
        css`
            &:hover {
                background: ${(props) => darken(0.05, props.background)};
            }

            &:active {
                background: ${(props) => darken(0.1, props.background)};
            }
        `};

    ${(props) =>
        props.withFocus &&
        css`
            &:focus {
                box-shadow: ${(props) => `0 0 0 1px ${props.focusColor}`};
            }
        `}

    ${(props) =>
        props.circle &&
        css`
            display: block;
            padding: 1em;
            border-radius: 50%;
            height: ${(props) => props.size};
        `}
`;
