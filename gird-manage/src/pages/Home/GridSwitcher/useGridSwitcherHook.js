import {Cascader, Tree} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function useGridSwitcherHook() {
    // 定义一个hook去拿到数据值，和处理后数据的值。
    const [GridData, setGridData] = useState([])
    const [TreeGridData, setTreeGridData] = useState(undefined);
    let root = {
        value: '0',
        name: '根节点',
    }
    // 使用useEffect请求数据
    useEffect(() => {
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
                setGridData(response.data)
                HandlerManagersToTree(root, response.data);
            })
    },[])

    let getManagers = () => {
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
                setGridData(response.data)
                HandlerManagersToTree(root, GridData);
            })
    }
    let HandlerManagersToTree = (root, ManagersData) => {
        ManagersData.forEach((ele) => {
            OrderTree(root, ele.fatherId, ele.ownId, ele.gridName, ele);
        })
        // 处理结束之后直接setState
        setTreeGridData(root.children)
    }


    let OrderTree = (TreeNode, fatherId, id, value, nodeData) => {
        if (TreeNode.value === fatherId) {
            if (typeof (TreeNode.children) == 'undefined') {
                TreeNode.children = [];
            }
            if(id==='99'){
                TreeNode.nodeData.push(nodeData)
            }else{
            TreeNode.children.push({value: id, name: value, nodeData: [nodeData]})
            }
        } else {
            if (typeof (TreeNode.children) !== 'undefined' && TreeNode.children.length !== 0) {
                TreeNode.children.forEach((ele) => {
                   OrderTree(ele, fatherId, id, value, nodeData)
                })
            }
        }
    }
    return (
        [
            GridData,
            TreeGridData
        ]
    )

}