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
    background: ${(props) => props.backgroundColor || "transparent"};
    z-index: ${(props) => props.zIndex};
`;

export const InputWrapper = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 0.7em;
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "1.5em"};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: ${(props) => props.backgroundColor || "whitesmoke"};
    padding: 0.2em 0 0.2em 0.3em;
    font-size: ${(props) => props.size || "1rem"};
    border-right: 1px solid #ddd;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    border-radius: 0.2em;
    box-shadow: 2px 3px 4px #090b0a;
    -webkit-border-radius: 0.2em;
    -moz-border-radius: 0.2em;
    -ms-border-radius: 0.2em;
    -o-border-radius: 0.2em;
    ${(props) =>
        props.tagLimitReached &&
        css`
            border: 0.1em solid darkred;
        `}

    ${(props) =>
        props.showDropdown &&
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
export const RelativeContainer = styled.div`
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
    box-shadow: 0px 0px 1px #ddd;
    border-radius: 0 0 0.2em 0.2em;
`;

export const Li = styled.li`
    text-align: ${(props) => props.textAlign || "left"};
    background-color: ${(props) => props.backgroundColor || "whitesmoke"};
    padding: 0.5em 3em;
    z-index: 999;

    ${(props) =>
        props.selected &&
        css`
            background-color: ${(props) =>
                darken(0.1, props.backgroundColor || "white")};
        `}
`;
//!Search dropdown

//! TAGS
export const CloseTag = styled.label`
    display: inline-block;
    align-self: center;
    margin: 0;
    border: none;
    font-size: inherit;
    font-weight: bold;
    font-family: inherit;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
        box-shadow: 0px 1px 2px #555;
    }
    &:active {
        box-shadow: 0 -1px 1px #555;
    }
`;
export const LiTag = styled.li`
    display: inline-flex;
    padding: ${(props) => props.padding || "5px 15px"};
    margin: 0 0.5em 0.5em 0px;
    font-size: inherit;
    border-radius: ${(props) => props.borderRadius || "4px"};
    overflow: hidden;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.1s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
    box-shadow: 1px 0 3px 1px #090b0a;
    color: #333;
    background-color: whitesmoke;

    &:hover {
        box-shadow: 0px 0px 2px 3px #090b0a;
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

export const Jumbotron = styled.div`
    position: relative;
    width: 80%;
    border-radius: 1em;
    padding: 2em;
    background: #1c2321;
`;

export const TitleMsg = styled.h1`
    text-align: center;
    color: whitesmoke;
    font-size: 4em;
    padding: 0;
    margin: 0;
    margin-bottom: 1em;
`;

export const Banner = styled.div`
    text-align: center;
    font-size: 3em;
    color: whitesmoke;
    margin-bottom: 1em;
    font-weight: bold;
    text-shadow: 5px 5px 5px black;
`;

export const SpanText = styled.span`
    display: inline-block;
    color: whitesmoke;
    text-align: center;
    vertical-align: middle;
    font-size: 15em;
`;
