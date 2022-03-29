import React, {useEffect} from "react";
import * as echarts from "echarts";
import async from "async";

export default function ManagersTree(props) {
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
    let myChart;
    useEffect(() => {
        let initTree = () => {
            let chartDom = document.getElementById('TreeContainer');
            myChart = echarts.init(chartDom);
            myChart.showLoading();
            //重新处理一下数据即可，重写数据处理函数。
            async function waitManagers (){
            }
        }
        initTree()
    }, []);

    return (
        <div id='TreeContainer'>
        </div>)

}
