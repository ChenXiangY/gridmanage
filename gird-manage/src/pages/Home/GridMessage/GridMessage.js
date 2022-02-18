import React from 'react';
import ProCard from "@ant-design/pro-card";
import "@ant-design/pro-card/dist/card.css"
import './GridMessage.css'

import {type} from "@testing-library/user-event/dist/type";
import StructureTree from "../StructureTree/Tree";
// 网格长和本级网格信息
export default class GridMessage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let nodeData;
        if((typeof(this.props.nodeData))!=='undefined') {
            nodeData = this.props.nodeData
        return (
            <ProCard split="vertical">
                <ProCard colSpan="20%">
                    <div className={'gridMessage'}>
                        <img src={nodeData.profileImg} alt=""/>
                        <h3>姓名：{nodeData.name}</h3>
                        <p>联系方式：{nodeData.phone}</p>
                        <p>网格编号：{nodeData.ownid}</p>
                        <p>网格名称：{nodeData.gridname}</p>
                    </div>
                </ProCard>
                <ProCard  headerBordered>
                    <StructureTree getNodeData={this.props.getNodeData} Managers={this.props.Managers}/>
                </ProCard>
            </ProCard>
        );
        }
        return (
            <div></div>
        )
    }
}