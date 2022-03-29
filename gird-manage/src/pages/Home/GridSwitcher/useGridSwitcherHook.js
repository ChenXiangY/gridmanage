import {Cascader, Tree} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";
import * as echarts from "echarts";
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
            OrderTree2(root, ele.fatherId, ele.ownId, ele.gridName, ele);
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

    let OrderTree2 = (TreeNode, fatherId, id, value, nodeData) => {
        if (TreeNode.value === fatherId) {
            let emphasis = {
                disabled: false,
                focus: 'self',
                blurScope: 'coordinateSystem',
                label: {
                    width:150
                }
            }
            let lableSet = {
                // width: 100,
                // height: 100,
                // lineHeight: 100,
                borderWidth: 1,  // 边框宽度
                // borderRadius: 50,  // 边框圆角
                borderType: [0],
                padding: 3,
                width: 130,
                // overflow:'break',
                // borderColor: "#B034FF",   // 文字块的边框色
                // backgroundColor: new echarts.graphic.LinearGradient(
                //     0, 0, 1, 1,
                //     [
                //         {offset: 0, color: '#dbe1e5'},
                //         {offset: 0.5, color: '#90c6f5'},
                //         {offset: 1, color: '#87c2cc'}
                //     ]
                // )
                // ,
                rich: {
                    backtitle: {
                        backgroundColor: '#63a9e8',
                        width: '100%',
                        height: 20,
                        align: 'left'
                    },
                    testimg: {
                        backgroundColor: {
                            image: TreeNode.profileImg,
                        },
                        height: 80,
                        width: 80,
                        align: 'center',
                        padding: 20,
                        borderColor: '#5b5b5b',
                        borderWidth: 2,
                    },
                    testmessage0: {
                        fontSize: 16,
                        align: 'center',
                        padding: [10, 1, 1, 1],
                        width: 100,
                        overflow: 'break-all',
                        wordBreak: 'break-all'
                    },
                    testmessage1: {
                        fontSize: 13,
                        align: 'center',
                        padding: [1, 1, 1, 1],
                        width: 100,
                    }
                },
                //   formatter: function (param) {
                //     //   拼接出来数据
                //     return '{testimg|}'+'\t{testimg|}\n'+'{testmessage|'+testname+'}'+'\t\t\t\t\t\t\t\t\t\t\t{testmessage|'+testname+'}\n'
                //     +'{testmessage|'+testphone+'}'+'\t\t\t\t{testmessage|'+testphone+'}\n'
                //     +'{testmessage|'+testgridName+'}'
                //   },
                formatter: function (param) {
                    //   拼接出来数据
                    // 修改gridName
                    let resultgridstring = nodeData.gridName.charAt(0)
                    for (let i = 1; i < nodeData.gridName.length; i++) {
                        if (i % 8 === 0) {
                            resultgridstring = resultgridstring + '\n' + nodeData.gridName.charAt(i)
                        } else {
                            resultgridstring = resultgridstring + nodeData.gridName.charAt(i)
                        }
                    }
                    // if (nodeData.gridName.length > 6) {
                    //     resultgridstring = resultgridstring.slice(0,5)+'\n'+resultgridstring.slice(5)
                    // }
                    // return '{backtitle|\t\n\n}' + '{testimg|}\n'
                        return  '{testmessage0|' + nodeData.name + '}\n'
                        + '{testmessage1|' + nodeData.ownId + '}\n'
                        + '{testmessage1|' + nodeData.phone + '}\n'
                        + '{testmessage1|' + resultgridstring + '}'
                },
            }
            if (typeof (TreeNode.children) == 'undefined') {
                TreeNode.children = [];
            }
            if (id === '99') {
                //    重写一个lableSet
                lableSet = {
                    // width: 100,
                    // height: 100,
                    // lineHeight: 100,
                    borderWidth: 1,  // 边框宽度
                    // borderRadius: 50,  // 边框圆角
                    borderType: [0],
                    padding: 3,
                    width: 260,
                    // overflow:'break',
                    // borderColor: "#B034FF",   // 文字块的边框色
                    // backgroundColor: new echarts.graphic.LinearGradient(
                    //     0, 0, 1, 1,
                    //     [
                    //         {offset: 0, color: '#dbe1e5'},
                    //         {offset: 0.5, color: '#90c6f5'},
                    //         {offset: 1, color: '#87c2cc'}
                    //     ]
                    // )
                    // ,
                    rich: {
                        backtitle: {
                            backgroundColor: '#63a9e8',
                            width: '100%',
                            height: 20,
                            align: 'left'
                        },
                        testimg1: {
                            backgroundColor: {
                                image: TreeNode.profileImg,
                            },
                            height: 80,
                            width: 80,
                            align: 'center',
                            padding: 20,
                            borderColor: '#5b5b5b',
                            borderWidth: 2,
                        },
                        testimg2: {
                            backgroundColor: {
                                image:nodeData.profileImg,
                            },
                            height: 80,
                            width: 80,
                            align: 'center',
                            padding: 20,
                            borderColor: '#5b5b5b',
                            borderWidth: 2,
                        },
                        testmessage0: {
                            fontSize: 16,
                            align: 'center',
                            padding: [10, 1, 1, 1],
                            width: 100,
                            overflow: 'break-all',
                            wordBreak: 'break-all'
                        },
                        testmessage1: {
                            fontSize: 13,
                            align: 'center',
                            padding: [1, 1, 1, 1],
                            width: 100,
                        }
                    },
                    formatter: function (param) {
                        //   拼接出来数据
                        // 修改gridName
                        let resultgridstring = nodeData.gridName.charAt(0)

                        for (let i = 1; i < nodeData.gridName.length; i++) {
                            if (i % 8 === 0) {
                                resultgridstring = resultgridstring + '\n' + nodeData.gridName.charAt(i)
                            } else {
                                resultgridstring = resultgridstring + nodeData.gridName.charAt(i)
                            }
                        }

                        // return '{backtitle|\t\n\n}'
                            return  '{testimg1|}' + '\t' + '{testimg2|}\n'
                            + '{testmessage0|' + TreeNode.nodeData.name + '}\t\t\t\t' + '{testmessage0|' + nodeData.name + '}\n'
                            + '{testmessage1|' + TreeNode.nodeData.phone + '}\t\t\t\t\t' + '{testmessage1|' + nodeData.phone + '}\n'
                            + '{testmessage1|' + TreeNode.nodeData.ownId + '}\n'
                            + '{testmessage1|' + resultgridstring + '}'
                    },
                    // formatter: function (param) {
                    //     //   拼接出来数据
                    //     // 修改gridName
                    //     let resultgridstring=''
                    //
                    //     for(let i =0;i<nodeData.gridName.length;i++){
                    //         if(i%8===0){
                    //             resultgridstring=resultgridstring+'\n'+nodeData.gridName.charAt(i)
                    //         }else{
                    //             resultgridstring=resultgridstring+nodeData.gridName.charAt(i)
                    //         }
                    //     }
                    //     // if (nodeData.gridName.length > 6) {
                    //     //     resultgridstring = resultgridstring.slice(0,5)+'\n'+resultgridstring.slice(5)
                    //     // }
                    //
                    //
                    //     return '{backtitle|\t\n\n}' + '{testimg|}\n'
                    //         + '{testmessage0|' + nodeData.name + '}\n'
                    //         + '{testmessage1|' + nodeData.ownid + '}\n'
                    //         + '{testmessage1|' + nodeData.phone + '}\n'
                    //         + '{testmessage1|' + resultgridstring + '}'
                    // },
                }
                TreeNode.label = lableSet
                emphasis = {
                    disabled: false,
                    focus: 'self',
                    blurScope: 'coordinateSystem',
                    label: {
                        width:280
                    }
                }
                TreeNode.emphasis=emphasis
            } else {
                TreeNode.children.push({value: id, name: value, emphasis:emphasis,label: lableSet, nodeData: nodeData})
            }
        } else {
            if (typeof (TreeNode.children) !== 'undefined' && TreeNode.children.length !== 0) {
                TreeNode.children.forEach((ele) => {
                    OrderTree2(ele, fatherId, id, value, nodeData)
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