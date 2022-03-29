import React from 'react'
import * as echarts from "echarts";
import {TreeChart} from "echarts/charts";
import axios from "axios";
import './Tree.css'

export default class StructureTree extends React.Component {
    myChart;
    option;
    constructor(props) {
        super(props);
    }


    collapsedChildren=(ele)=>{
    //    找ele的treeAncestors，然后遍历并修改collapsed属性。

    }

    handlerTreeClick=(ele)=>{
        this.props.getNodeData(ele.value,ele.data.nodeData)
    }

    componentDidMount() {
        let chartDom = document.getElementById('TreeContainer');
        this.myChart = echarts.init(chartDom);
        this.option={
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',
                    data: this.props.Managers,
                    left: '2%',
                    right: '2%',
                    top: '8%',
                    bottom: '20%',
                    symbol: 'emptyCircle',
                    orient: 'vertical',
                    expandAndCollapse: true,
                    label: {
                        position: 'top',
                        rotate: 0,
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 13
                    },
                    leaves: {
                        label: {
                            position: 'bottom',
                            rotate: 0,
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    },
                    animationDurationUpdate: 750,
                    initialTreeDepth:1,
                }
            ]
        }
        this.myChart.showLoading();
        //重新处理一下数据即可，重写数据处理函数。
            this.myChart.hideLoading();
            this.myChart.setOption(
                (this.option)
            )
    }


    render() {
        return (
            <div id='TreeContainer'>
            </div>
        );
    }
}