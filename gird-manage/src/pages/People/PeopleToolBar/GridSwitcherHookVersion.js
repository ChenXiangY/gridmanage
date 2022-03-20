import React from "react";
import {Cascader} from "antd";

export default function GridSwitcherHookVersion(props){

    return (
        <Cascader
            fieldNames={{label: 'name'}}
            options={props.value}
            onChange={(value, ele) => {
                ele=ele[ele.length-1]
                props.getNodeData(value, ele)
            }}
            placeholder={'please Select'}
            changeOnSelect/>
    );
}