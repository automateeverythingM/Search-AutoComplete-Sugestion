import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

//!!!INPUTSTYLE
export const Input = styled.input`
    position: ${(props) => props.position || "absolute"};
    font-size: 0.7em;
    width: ${(props) => props.width || "3000px"};
    outline: none;
    border: none;
    font-size: ${(props) => props.fontSize || "0.7em"};
    color: ${(props) => props.color || "#333"};
    padding: 0.2em 0;
    padding-left: 0.1em;
    background: transparent;
    z-index: ${(props) => props.zIndex};
`;

export const InputWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 0.7em;
    width: ${(props) => props.width || "500px"};
    height: ${(props) => props.height || "1.5em"};
`;

export const Wrapper = styled.div`
    font-size: ${(props) => props.size || "1rem"};
    box-shadow: 2px 3px 4px #ddd;
    overflow: hidden;
    border-right: 1px solid #ddd;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    display: flex;
    align-items: center;
    overflow: hidden;
    border-radius: 0.2em;
    padding: 0.2em 0 0.2em 0.3em;
    -webkit-border-radius: 0.2em;
    -moz-border-radius: 0.2em;
    -ms-border-radius: 0.2em;
    -o-border-radius: 0.2em;

    ${(props) =>
        props.dropDownStyle &&
        css`
            border-radius: 0.2em 0.2em 0 0;
        `}
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
//!!!INPUTSTYLE

//!! SearchACSC
export const Form = styled.form`
    position: relative;
`;
//!! SearchACSC

//!Search dropdown
export const Ul = styled.ul`
    display: ${(props) => props.display};
    position: ${(props) => props.position};
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

export const UlDropdown = styled(Ul)`
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #eee;
    border-left: 1px solid #eee;
    box-shadow: 1px 1px 2px #ddd;
    border-radius: 0.2em;
`;

export const Li = styled.li`
    text-align: ${(props) => props.textAlign || "left"};
    background-color: ${(props) => props.backgroundColor || "white"};
    padding: 0.5em 3em;
    z-index: 999;

    &:hover {
        background-color: ${(props) =>
            darken(0.1, props.backgroundColor || "white")};
    }
`;
//!Search dropdown

//! TAGS
export const CloseTag = styled.label`
    display: inline-block;
    align-self: center;
    margin: 0;
    border: none;
    height: 80%;
    font-size: inherit;
    font-weight: bold;
    font-family: inherit;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
`;
export const LiTag = styled.li`
    display: inline-flex;
    padding: ${(props) => props.padding || "5px 15px"};
    margin: 0.8em 0.5em 0.3em 0px;
    font-size: inherit;
    border-radius: ${(props) => props.borderRadius || "4px"};
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.1s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 1px 0 3px #999;
    color: #333;
    background-color: white;

    &:hover {
        box-shadow: 0px 0px 3px #999;
    }
    &:active {
        background-color: ${(props) => props.boxShadowColorActive};
    }

    &:hover ${CloseTag} {
        box-shadow: 0px 1px 2px #aaa;
    }
    &:active ${CloseTag} {
        box-shadow: 0 -1px 1px #999;
    }
`;

export const TagLabel = styled.div`
    display: inline-block;
    font-size: inherit;
    text-decoration: none;
    color: ${(props) => props.textColor};
    padding: 5px;
    font-weight: bold;
`;

//! TAGS

//!
/* ${(props) =>
        props.selected &&
        css`
            background-color: transparent;
            ${"" /* border: 1px solid #131518; }
            box-shadow: 1px 0 3px  #999;
            color: #131518;
        `} */

/* ${(props) =>
        props.selected &&
        css`
            &:hover {
                box-shadow: ${(props) =>
                    `0px 0px 2px 1px ${darken(0.2, props.backgroundColor)}`};
                    
        
            &:active {
                box-shadow: ${(props) =>
                    `0px 0px 2px 2px ${darken(0.1, props.backgroundColor)}`};
                background-color: ${(props) =>
                    darken(0.1, props.backgroundColor)};
            }
        `} */
//!
