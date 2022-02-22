import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "@ant-design/pro-layout/dist/layout.css"
import ProLayout, {PageContainer} from "@ant-design/pro-layout";
import './App.css';
import {Button} from "antd";
import Home from "./pages/Home/Home";

moment.locale('zh-cn');

export default class App extends React.Component {
    render() {
        return (
            <ProLayout
                className={'homePageLayout'}
                headerContentRender={()=>{
                    return (
                        <div style={{
                            textAlign:'center',
                            fontSize:'20px',
                            fontWeight:'bold'
                        }}
                        >
                            日月湖街道五级网格化管理系统
                        </div>
                    )
                }}
                route={{
                    routes:[
                        {path:'/',
                        name:'网格长',
                        component:'Home'},
                        {
                         path:'/events',
                            name:'事件管理',
                            component:'./pages/Event/Event'
                        },
                        {
                            path:'/score',
                            name:'积分统计',
                            component: './pages/Score/Score'
                        }
                    ]
                }}
            >
                <PageContainer
                    header={{
                        CSSStyleRule:{padding:'0px'}
                    }}
                    // 一个级联选择框
                    // 一个搜索框
                    // 下方内容左侧显示网格长和本级网格信息
                    // 右方显示架构图
                >
                </PageContainer>
            </ProLayout>
        )
    }
}
