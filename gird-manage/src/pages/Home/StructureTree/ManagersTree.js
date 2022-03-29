import React, {useEffect, useState} from "react";
import * as echarts from "echarts";
import async from "async";

export default function ManagersTree(props) {
    const [main,setMain]=useState()
    let option = {
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'tree',
                data: props.Managers,
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
                initialTreeDepth: 1,
            }
        ]
    }
    option = {
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
                data: props.Managers,
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
    useEffect(() => {
        let initTree = () => {
            let chartDom = document.getElementById('TreeContainer');
            let myChart = echarts.init(chartDom);
            setMain(myChart)
            myChart.showLoading();
            //重新处理一下数据即可，重写数据处理函数。
        }
        initTree()
    }, []);

    if(props.Managers && main){
        main.setOption(option)
        main.hideLoading()
    }
    return (
        <div id='TreeContainer'>
        </div>)

}
