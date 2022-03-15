import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import "@ant-design/pro-layout/dist/layout.css"
import ProLayout, {PageContainer} from "@ant-design/pro-layout";
import './App.css';
import {Button} from "antd";
import Home from "./pages/Home/Home";
import {BrowserRouter, Route, Routes, useParams, useLocation, useNavigate} from "react-router-dom";
import Event from "./pages/Event/Event";
import People from "./pages/People/People";


moment.locale('zh-cn');

export default function App() {
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <ProLayout
            className={'homePageLayout'}
            headerContentRender={() => {
                return (
                    <div style={{
                        textAlign: 'center',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                    >
                        日月湖街道五级网格化管理系统
                    </div>
                )
            }}
            location={{
                pathname: '/'
            }}
            route={{
                path: '/',
                component: './pages/Home/Home',
                routes: [
                    {
                        path: '/home',
                        name: '网格长',
                        component: './pages/Home/Home'
                    },
                    {
                        path: '/people',
                        name: '人员管理',
                        component: './pages/People/People'
                    },
                    {
                        path: './score',
                        name: '积分统计',
                        component: './pages/Score/Score'
                    }
                ]
            }}
            menuItemRender={(item, dom) => (
                <a
                    onClick={() => {
                        navigate(item.path);
                    }}
                >
                    {dom}
                </a>
            )}

        >
            <PageContainer
                header={{
                    CSSStyleRule: {padding: '0px'}
                }}
                // 一个级联选择框
                // 一个搜索框
                // 下方内容左侧显示网格长和本级网格信息
                // 右方显示架构图

            >
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/people" element={<People/>}/>

                </Routes>
            </PageContainer>
        </ProLayout>
    )


}


