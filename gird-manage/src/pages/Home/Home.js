import React from 'react'
import GridSwitcher from './GridSwitcher/GridSwitcher'
import GridMessage from "./GridMessage/GridMessage";
import axios from "axios";
import {Tree} from "antd";


// 创建一个context让底下的组件能够获得网格长
let Managers = []
const ManagersContext = React.createContext(Managers)
export default class Home extends React.Component {
    root = {
        value: '0',
        name: '根节点',
    };
    // 费死劲。
    OrderTree = (TreeNode, fatherid, id, value,nodeData) => {
        if (TreeNode.value === fatherid) {
            if (typeof (TreeNode.children) == 'undefined') {
                TreeNode.children = [];
            }
            TreeNode.children.push({value: id, name: value,nodeData:nodeData})
        } else {
            if(typeof (TreeNode.children) !== 'undefined' && TreeNode.children.length !==0){
            TreeNode.children.forEach((ele) => {
                this.OrderTree(ele, fatherid, id, value,nodeData)
            })
            }
        }

    }
    OrderTree2 = (TreeNode, fatherid, id, value,nodeData) => {
        if (TreeNode.value === fatherid) {
            if (typeof (TreeNode.children) == 'undefined') {
                TreeNode.children = [];
            }else if(id==='99'){
                TreeNode.nodeData.push(nodeData);
            }
            TreeNode.children.push({value: id, name: value,nodeData:[nodeData]})
        } else {
            if(typeof (TreeNode.children) !== 'undefined' && TreeNode.children.length !==0){
                TreeNode.children.forEach((ele) => {
                    this.OrderTree(ele, fatherid, id, value,nodeData)
                })
            }
        }

    }

    HandlerManagersToTree = (root, ManagersData) => {
        ManagersData.forEach((ele) => {
            this.OrderTree(root, ele.fatherid, ele.ownid, ele.gridname,ele);
        })
        // 处理结束之后直接setState
        this.setState({
            switcherData:this.root.children
        })
    }
    getManagers = () => {
        // 直接在这里获得所有网格长的信息
        let url = 'http://localhost:8080/getAllManagers'
        let Headers = {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'

        }
        axios.post(url, null, {
            headers: Headers
        })
            .then((response) => {
                Managers = response.data
                this.HandlerManagersToTree(this.root, Managers);
            })
    }

    componentDidMount() {
    }
    getNodeData = (value,ele) => {
        this.setState({
            nodeData:ele
        })
    }
    constructor() {
        super();
        this.state={
            switcherData:undefined,
            nodeData:undefined
        }
    }
    render() {
        return (
            <div>
                <ManagersContext.Provider value={Managers}>
                    <GridSwitcher getManagers={this.getManagers}
                                  getNodeData={this.getNodeData}
                                  value={this.state.switcherData}/>
                    {/*明天再考虑这里设置context*/}
                    <GridMessage
                        Managers={this.state.switcherData}
                        nodeData={this.state.nodeData}
                        getNodeData={this.getNodeData}/>
                </ManagersContext.Provider>
            </div>
        )
    }
}