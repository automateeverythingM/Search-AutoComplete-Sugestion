import React from "react";
import { Select, SelectLi, SelectWrapper, UlSelect } from "../StyledComp";
import { RiArrowDropDownLine } from "react-icons/ri";
import { connect } from "react-redux";
import {
    setSelectFilter,
    toggleFilterList,
} from "../store/MainSearch/mainSearchReducer";
function Selection({
    data,
    selected,
    setSelected,
    toggleFilterList,
    showList,
}) {
    function clickHandler(e) {
        if (selected.id === e.target.id) return;
        setSelected(e.target.dataset.id);
    }
    console.log("showFilterList", showList);

    return (
        <SelectWrapper>
            <Select onClick={() => toggleFilterList()}>
                <div>{selected.name}</div>
                <RiArrowDropDownLine />
            </Select>
            <UlSelect
                show={showList}
                position="absolute"
                onClick={clickHandler}
            >
                {data.map((item) => {
                    return (
                        <SelectLi
                            selected={item.selected}
                            key={item.id}
                            data-id={item.id}
                        >
                            {item.name}
                        </SelectLi>
                    );
                })}
            </UlSelect>
        </SelectWrapper>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.selectFilterList,
        selected: state.selectedFilter,
        showList: state.showFilterList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelected: (value) => dispatch(setSelectFilter(value)),
        toggleFilterList: () => dispatch(toggleFilterList()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
