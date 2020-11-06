import React from "react";
import { Li, SelectWrapper, Ul } from "../StyledComp";
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Selection() {
    return (
        <div style={{ height: "100%", flex: "0 0 10%" }}>
            <SelectWrapper>
                <div> Project</div>
                <RiArrowDropDownLine />
            </SelectWrapper>
            <Ul style={{ position: "absolute", textAlign: "center" }}>
                <Li style={{ textAlign: "center" }}>Project</Li>
                <Li style={{ textAlign: "center" }}>Project</Li>
                <Li style={{ textAlign: "center" }}>Project</Li>
                <Li style={{ textAlign: "center" }}>Project</Li>
            </Ul>
        </div>
    );
}
