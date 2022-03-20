import React from 'react'
import {Cascader} from "antd";
import 'antd/dist/antd.css';

export default class GridSwitcher extends React.Component {
    options;

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getManagers();
    }

    render() {
        console.log(this.props.value)
        return (
            <Cascader
                fieldNames={{label: 'name'}}
                options={this.props.value}
                onChange={(value, ele) => {
                    ele=ele[ele.length-1].nodeData
                    this.props.getNodeData(value, ele)
                }}
                placeholder={'please Select'}
                changeOnSelect/>
        );
    }
}