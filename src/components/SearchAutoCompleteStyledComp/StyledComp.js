import styled from "styled-components";
import { lighten, darken } from "polished";
export const Input = styled.input`
    position: ${(props) => props.position || "absolute"};
    font-size: 0.7em;
    width: ${(props) => props.width || "3000px"};
    outline: none;
    border: none;
    font-size: ${(props) => props.fontSize || "0.7em"};
    color: ${(props) => props.color || "#333"};
    padding: 0.2em 0;
    background: transparent;
    z-index: ${(props) => props.zIndex};
`;

export const InputWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 0.7em;
    width: ${(props) => props.width || "300px"};
    height: ${(props) => props.height || "1.5em"};
`;

export const Wrapper = styled.div`
    font-size: ${(props) => props.size || "1rem"};
    box-shadow: 1px 1px 2px #ddd;
    overflow: hidden;
    border-right: 1px solid #ddd;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 0.2em;
    padding: 0 0 0 0.3em;
    -webkit-border-radius: 0.2em;
    -moz-border-radius: 0.2em;
    -ms-border-radius: 0.2em;
    -o-border-radius: 0.2em;
`;
export const Button = styled.button`
    background: none;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    height: 100%;
    transition: all 0.2s ease-in-out;

    &:active {
        filter: drop-shadow(0px 1px 0px #999);
    }
`;

export const Icon = styled(Button)`
    color: ${(props) => props.color || "#333333"};
    font-size: 0.5em;
    padding: 0 0.5em;

    &:hover {
        color: ${(props) => lighten(0.2, props.color)};
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const CloseButton = styled(Button)`
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    color: red;
    padding: 0 0.5em;
    font-size: 0.8em;
    &:hover {
        color: ${(props) => darken(0.2, props.color)};
    }

    &:active {
        transform: scale(0.97);
    }
`;
