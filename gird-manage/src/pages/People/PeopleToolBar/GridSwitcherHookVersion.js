import React from "react";
import {Cascader} from "antd";

export default function GridSwitcherHookVersion(props){

    return (
        <Cascader
            fieldNames={{label: 'name'}}
            options={props.options}
            onChange={(value, ele) => {
                ele=ele[ele.length-1]
                props.getNodeData(value, ele)
            }}
            placeholder={'please Select'}
            style={{
                width:"70%"
            }}
            defaultValue={["17"]}
            changeOnSelect/>
    );
}