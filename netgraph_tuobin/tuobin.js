let ROOT_PATH =
'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
let chartDom = document.getElementById('TreeContainer');
this.myChart = echarts.init(chartDom);
let testname='网格长'
let testphone='1354678945'
let testgridname='沱滨街道办事处张庄村王庄组1群'

let testdata=[
    {
        name:testname,
        label:{
            // width: 100,
            // height: 100,
            // lineHeight: 100,
            borderWidth: 1,  // 边框宽度
            // borderRadius: 50,  // 边框圆角
            borderType:[0],
            padding:3,
            borderColor: "#B034FF",   // 文字块的边框色
            backgroundColor:  new echarts.graphic.LinearGradient(
                0, 0, 1, 1,
                [
                    {offset: 0, color: '#fff'},
                    // {offset: 0.5, color: '#888'},
                    {offset: 1, color: '#6495ED'}
                ]
            )
            ,
            rich: {
                backtitle:{
                    backgroundColor:'#1E90FF',
                    width:'100%',
                    height:40,
                    align:'left'
                },
                      testimg: {
                          backgroundColor: {
                              image: './ProfileImg/1.png',
                          },
                          height: 80,
                          width:80,
                          align:'center',
                          padding:20,
                          borderColor:'#1E90FF',
                          borderWidth:10,
                      },
                      testmessage:{
                        fontSize:15,
                        align:'center',
                        padding:[10,1,1,1],
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
                    return '{backtitle|\t\n\n}'+'{testimg|}\n'
                    +'{testmessage|'+testname+'}\n'
                    +'{testmessage|'+testphone+'}\n'
                    +'{testmessage|'+testgridname+'}'
                  },

        },
        children:[
            {
            name:'zi1',
            label:{
                // width: 100,
                // height: 100,
                // lineHeight: 100,
                borderWidth: 1,  // 边框宽度
                // borderRadius: 50,  // 边框圆角
                borderType:[0],
                padding:3,
                borderColor: "#B034FF",   // 文字块的边框色
                backgroundColor:  new echarts.graphic.LinearGradient(
                    0, 0, 1, 1,
                    [
                        {offset: 0, color: '#fff'},
                        // {offset: 0.5, color: '#888'},
                        {offset: 1, color: '#6495ED'}
                    ]
                )
                ,
                rich: {
                    backtitle:{
                        backgroundColor:'#1E90FF',
                        width:'100%',
                        height:40,
                        align:'left'
                    },
                          testimg: {
                              backgroundColor: {
                                  image: './ProfileImg/1.png',
                              },
                              height: 80,
                              width:80,
                              align:'center',
                              padding:20,
                              borderColor:'#1E90FF',
                              borderWidth:10,
                          },
                          testmessage:{
                            fontSize:15,
                            align:'center',
                            padding:[10,1,1,1],
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
                        return '{backtitle|\t\n\n}'+'{testimg|}\n'
                        +'{testmessage|'+testname+'}\n'
                        +'{testmessage|'+testphone+'}\n'
                        +'{testmessage|'+testgridname+'}'
                      },
    
            },
        },            {
            name:'zi1',
            label:{
                // width: 100,
                // height: 100,
                // lineHeight: 100,
                borderWidth: 1,  // 边框宽度
                // borderRadius: 50,  // 边框圆角
                borderType:[0],
                padding:3,
                borderColor: "#B034FF",   // 文字块的边框色
                backgroundColor:  new echarts.graphic.LinearGradient(
                    0, 0, 1, 1,
                    [
                        {offset: 0, color: '#fff'},
                        // {offset: 0.5, color: '#888'},
                        {offset: 1, color: '#6495ED'}
                    ]
                )
                ,
                rich: {
                    backtitle:{
                        backgroundColor:'#1E90FF',
                        width:'100%',
                        height:40,
                        align:'left'
                    },
                          testimg: {
                              backgroundColor: {
                                  image: './ProfileImg/1.png',
                              },
                              height: 80,
                              width:80,
                              align:'center',
                              padding:20,
                              borderColor:'#1E90FF',
                              borderWidth:10,
                          },
                          testmessage:{
                            fontSize:15,
                            align:'center',
                            padding:[10,1,1,1],
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
                        return '{backtitle|\t\n\n}'+'{testimg|}\n'
                        +'{testmessage|'+testname+'}\n'
                        +'{testmessage|'+testphone+'}\n'
                        +'{testmessage|'+testgridname+'}'
                      },
    
            },
        },            {
            name:'zi1',
            label:{
                // width: 100,
                // height: 100,
                // lineHeight: 100,
                borderWidth: 1,  // 边框宽度
                // borderRadius: 50,  // 边框圆角
                borderType:[0],
                padding:3,
                borderColor: "#B034FF",   // 文字块的边框色
                backgroundColor:  new echarts.graphic.LinearGradient(
                    0, 0, 1, 1,
                    [
                        {offset: 0, color: '#fff'},
                        // {offset: 0.5, color: '#888'},
                        {offset: 1, color: '#6495ED'}
                    ]
                )
                ,
                rich: {
                    backtitle:{
                        backgroundColor:'#1E90FF',
                        width:'100%',
                        height:40,
                        align:'left'
                    },
                          testimg: {
                              backgroundColor: {
                                  image: './ProfileImg/1.png',
                              },
                              height: 80,
                              width:80,
                              align:'center',
                              padding:20,
                              borderColor:'#1E90FF',
                              borderWidth:10,
                          },
                          testmessage:{
                            fontSize:15,
                            align:'center',
                            padding:[10,1,1,1],
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
                        return '{backtitle|\t\n\n}'+'{testimg|}\n'
                        +'{testmessage|'+testname+'}\n'
                        +'{testmessage|'+testphone+'}\n'
                        +'{testmessage|'+testgridname+'}'
                      },
    
            },
        }
    ]
    }
]

this.option={
tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
},
series: [
    {
        type: 'tree',
        data: testdata,
        left: '2%',
        right: '2%',
        top: '40%',
        bottom: '20%',
        symbol: 'emptyCircle',
        orient: 'vertical',
        expandAndCollapse: true,
        roam:'true',
        label: {
            position: 'top',
            rotate: 0,
            // verticalAlign: 'middle',
            align: 'center',
            fontSize: 13
        },
        leaves: {
            label: {
                position: 'top',
                rotate: 0,
                verticalAlign: 'middle',
                align: 'center'
            }
        },
        animationDurationUpdate: 750,
        initialTreeDepth:1,
    }
]
}
console.log(this.myChart);
console.log(testdata);
console.log(this.option)
this.myChart.showLoading();
//重新处理一下数据即可，重写数据处理函数。
this.myChart.hideLoading();
this.myChart.setOption(
    (this.option)
)