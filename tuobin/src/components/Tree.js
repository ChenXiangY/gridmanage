import React, {Children} from "react";
import * as echarts from "echarts";
import * as XLSX from 'xlsx/xlsx.mjs';
import './Tree.css';

export default class extends React.Component {
    exceldata;

    root = {
        value: '0',
        name: '根节点',
    };

    constructor(props) {
        super(props);
        this.state = {
            switcherData: []
        }
    }

    getdatafromexcel = file => {
        // 获取上传的文件对象
        this.root = {
            value: '0',
            name: '根节点',
        }
        const {files} = file.target;
        // 通过FileReader对象读取文件
        const fileReader = new FileReader();
        fileReader.onload = event => {
            try {
                const {result} = event.target;
                // 以二进制流方式读取得到整份excel表格对象
                const workbook = XLSX.read(result, {type: 'binary'});
                let data = []; // 存储获取到的数据
                // 遍历每张工作表进行读取（这里默认只读取第一张表）
                for (const sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                        break; // 如果只取第一张表，就取消注释这行
                    }
                }
                this.exceldata = data;
                //    表格数据处理好之后开始进行变成树，并setstate
                this.HandlerManagersToTree(this.root, data);
                // setState之后就重新渲染了
                let chartDom = document.getElementById('Tree');
                this.myChart = echarts.init(chartDom);
                this.option = {
                    tooltip: {
                        trigger: 'item',
                        triggerOn: 'mousemove'
                    },
                    itemStyle: {
                        normal: {
                            color: '#b22125'
                        },
                        emphasis: {
                            borderColor: 'black',
                            color: 'black'
                        },
                    },
                    series: [
                        {
                            type: 'tree',
                            data: this.root.children,
                            left: '2%',
                            right: '2%',
                            top: '25%',
                            bottom: '20%',
                            symbol: 'emptyCircle',
                            orient: 'vertical',
                            expandAndCollapse: true,
                            roam: true,
                            label: {
                                position: 'top',
                                rotate: 0,
                                // verticalAlign: 'middle',
                                align: 'center',
                                fontSize: 13,
                                distance: 10,
                                shadowColor: "rgba(0, 0, 0, 1)",
                                shadowBlur: 2.5,
                                shadowOffsetX: 2.5,
                                shadowOffsetY: 2.5
                            },
                            leaves: {
                                label: {
                                    position: 'top',
                                    rotate: 0,
                                    align: 'center'
                                }
                            },
                            animationDurationUpdate: 750,
                            initialTreeDepth: 1,
                            edgeShape: 'curve',
                            edgeForkPosition: '0%',
                            emphasis: {
                                disabled: false,
                                focus: 'self',
                                blurScope: 'coordinateSystem',
                                label: {}

                            },
                        }
                    ]
                }
                this.myChart.showLoading();
//重新处理一下数据即可，重写数据处理函数。
                this.myChart.hideLoading();
                this.myChart.setOption(
                    (this.option)
                )
                // 给树绑定一个点击事件
                //    写个事件绑定，blur的
            } catch (e) {
                // 这里可以抛出文件类型错误不正确的相关提示
                console.log('文件类型不正确');
                return;
            }
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
    }

    collapsedTree = (data,TreeNode)=>{
        console.log(data)
        if(data.children !== undefined){
            data.children.forEach((ele)=>{
                if(ele.value === TreeNode.value){
                    if(ele.children !== undefined){
                        ele.children.forEach((ele)=>{
                            ele.label=1
                            ele.collapsed=true
                            console.log(data)
                        })
                    }
                //    如果找到了这个节点，那么以这个节点为根的所有展开的子节点全部都修改为折叠
                }
            })
        }
    }

    OrderTree = (TreeNode, fatherid, id, value, nodeData) => {
        if (TreeNode.value === fatherid) {
            if (typeof (TreeNode.children) == 'undefined') {
                TreeNode.children = [];
            }
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
                backgroundColor: new echarts.graphic.LinearGradient(
                    0, 0, 1, 1,
                    [
                        {offset: 0, color: '#dbe1e5'},
                        {offset: 0.5, color: '#90c6f5'},
                        {offset: 1, color: '#87c2cc'}
                    ]
                )
                ,
                rich: {
                    backtitle: {
                        backgroundColor: '#63a9e8',
                        width: '100%',
                        height: 20,
                        align: 'left'
                    },
                    testimg: {
                        backgroundColor: {
                            image: './ProfileImg/' + id + '.jpg',
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
                //     +'{testmessage|'+testgridname+'}'
                //   },
                formatter: function (param) {
                    //   拼接出来数据
                    // 修改gridname
                    let resultgridstring = ''

                    for (let i = 1; i < nodeData.gridname.length; i++) {
                        if (i % 8 === 0) {
                            resultgridstring = resultgridstring + '\n' + nodeData.gridname.charAt(i)
                        } else {
                            resultgridstring = resultgridstring + nodeData.gridname.charAt(i)
                        }
                    }
                    // if (nodeData.gridname.length > 6) {
                    //     resultgridstring = resultgridstring.slice(0,5)+'\n'+resultgridstring.slice(5)
                    // }


                    return '{backtitle|\t\n\n}' + '{testimg|}\n'
                        + '{testmessage0|' + nodeData.name + '}\n'
                        + '{testmessage1|' + nodeData.ownid + '}\n'
                        + '{testmessage1|' + nodeData.phone + '}\n'
                        + '{testmessage1|' + resultgridstring + '}'
                },

            }
            TreeNode.children.push({value: id, name: value, label: lableSet, nodeData: nodeData})
        } else {
            if (typeof (TreeNode.children) !== 'undefined' && TreeNode.children.length !== 0) {
                TreeNode.children.forEach((ele) => {
                    this.OrderTree(ele, fatherid, id, value, nodeData)
                })
            }
        }
    }

    OrderTree2 = (TreeNode, fatherid, id, value, nodeData) => {
        if (TreeNode.value === fatherid) {
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
                backgroundColor: new echarts.graphic.LinearGradient(
                    0, 0, 1, 1,
                    [
                        {offset: 0, color: '#dbe1e5'},
                        {offset: 0.5, color: '#90c6f5'},
                        {offset: 1, color: '#87c2cc'}
                    ]
                )
                ,
                rich: {
                    backtitle: {
                        backgroundColor: '#63a9e8',
                        width: '100%',
                        height: 20,
                        align: 'left'
                    },
                    testimg: {
                        backgroundColor: {
                            image: './ProfileImg/' + id + '.jpg',
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
                //     +'{testmessage|'+testgridname+'}'
                //   },
                formatter: function (param) {
                    //   拼接出来数据
                    // 修改gridname
                    let resultgridstring = nodeData.gridname.charAt(0)

                    for (let i = 1; i < nodeData.gridname.length; i++) {
                        if (i % 8 === 0) {
                            resultgridstring = resultgridstring + '\n' + nodeData.gridname.charAt(i)
                        } else {
                            resultgridstring = resultgridstring + nodeData.gridname.charAt(i)
                        }
                    }
                    // if (nodeData.gridname.length > 6) {
                    //     resultgridstring = resultgridstring.slice(0,5)+'\n'+resultgridstring.slice(5)
                    // }


                    return '{backtitle|\t\n\n}' + '{testimg|}\n'
                        + '{testmessage0|' + nodeData.name + '}\n'
                        + '{testmessage1|' + nodeData.ownid + '}\n'
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
                    backgroundColor: new echarts.graphic.LinearGradient(
                        0, 0, 1, 1,
                        [
                            {offset: 0, color: '#dbe1e5'},
                            {offset: 0.5, color: '#90c6f5'},
                            {offset: 1, color: '#87c2cc'}
                        ]
                    )
                    ,
                    rich: {
                        backtitle: {
                            backgroundColor: '#63a9e8',
                            width: '100%',
                            height: 20,
                            align: 'left'
                        },
                        testimg1: {
                            backgroundColor: {
                                image: './ProfileImg/' + TreeNode.nodeData.ownid + '.jpg',
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
                                image: './ProfileImg/' + TreeNode.nodeData.ownid + '1.jpg',
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
                        // 修改gridname
                        let resultgridstring = nodeData.gridname.charAt(0)

                        for (let i = 1; i < nodeData.gridname.length; i++) {
                            if (i % 8 === 0) {
                                resultgridstring = resultgridstring + '\n' + nodeData.gridname.charAt(i)
                            } else {
                                resultgridstring = resultgridstring + nodeData.gridname.charAt(i)
                            }
                        }

                        return '{backtitle|\t\n\n}'
                            + '{testimg1|}' + '\t' + '{testimg2|}\n'
                            + '{testmessage0|' + TreeNode.nodeData.name + '}\t\t\t\t' + '{testmessage0|' + nodeData.name + '}\n'
                            + '{testmessage1|' + TreeNode.nodeData.phone + '}\t\t\t\t\t' + '{testmessage1|' + nodeData.phone + '}\n'
                            + '{testmessage1|' + TreeNode.nodeData.ownid + '}\n'
                            + '{testmessage1|' + resultgridstring + '}'
                    },
                    // formatter: function (param) {
                    //     //   拼接出来数据
                    //     // 修改gridname
                    //     let resultgridstring=''
                    //
                    //     for(let i =0;i<nodeData.gridname.length;i++){
                    //         if(i%8===0){
                    //             resultgridstring=resultgridstring+'\n'+nodeData.gridname.charAt(i)
                    //         }else{
                    //             resultgridstring=resultgridstring+nodeData.gridname.charAt(i)
                    //         }
                    //     }
                    //     // if (nodeData.gridname.length > 6) {
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
                    this.OrderTree2(ele, fatherid, id, value, nodeData)
                })
            }
        }
    }

    HandlerManagersToTree = (root, ManagersData) => {
        ManagersData.forEach((ele) => {
            this.OrderTree2(root, ele.fatherid, ele.ownid, ele.gridname, ele);
        })
        // 处理结束之后直接setState
        this.setState({
            switcherData: this.root.children
        })
    }

    componentDidMount() {
        // 挂载之后在进行
    }

    //处理数据,通过上传excel文件


    render() {
        return (
            <div>
                <div className='header'>
                    <h1>沱滨街道办事处五级网格化示意图</h1>
                    <input type="file" name="file" id="file" className="inputfile" onChange={this.getdatafromexcel}/>
                    <label htmlFor="file" >
                        <img src="./jia.png"  className='addImg' alt="" />
                        <div>更新网格架构</div>
                    </label>
                </div>
                <div id='Tree' style={{width: '95vw', height: '110vh'}}>

                </div>

            </div>
        )
    }

}
