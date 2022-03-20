import {useEffect, useState} from "react";
import GridSwitcherHookVersion from "./PeopleToolBar/GridSwitcherHookVersion";
import useGridSwitcherHook from "../Home/GridSwitcher/useGridSwitcherHook";
import PeopleSearchBar from "./PeopleToolBar/PeopleSearchBar";
import PeopleFilterBar from "./PeopleToolBar/PeopleFilterBar";
import ProCard from "@ant-design/pro-card";
import StructureTree from "../Home/StructureTree/Tree";
import {Button} from "antd";
import ProList from "@ant-design/pro-list";
import axios from "axios";
import {List} from "antd/es";
import ProTable, {TableDropdown} from '@ant-design/pro-table';
import {ProColumns} from "@ant-design/pro-table/es";
import async from "async";
import "./People.css"

export default function People() {
    const [Managers, TreeManagers] = useGridSwitcherHook();
    const [NodeData, setNodeData] = useState([]);
    const [searchParams, setSearchParams] = useState({
        pageSize:10,
        current:1
    });
    const [list, setList] = useState([]);
    const [columns, setColumns] = useState([]);

    let headers = {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
    }
    let setParams = (queryParamsKV) => {
        setSearchParams(queryParamsKV)
    }
    let onSearch = (queryParamsKV) => {
        //           查找姓名、身份证号码、户号得到的列表是某一户的列表，显示户信息和个人信息
        //            查找姓名：存在重名，要先得到异步结果，然后让用户点击。
        //            查找网格编号：
        //            1-4级网格，显示次级网格长列表，5级网格，显示管理户的户主和基本户信息
        // 查找1-4级网格
        let result = {
            pageSize: 10,
            current: 1,
            data: '初始值',
            success: false
        }
        if (queryParamsKV['fatherId'] !== undefined && queryParamsKV['fatherId'].length < 11) {
            result = axios.post(
                "http://localhost:8080/getManagesByColumn",
                queryParamsKV,
                {headers: headers}
            ).then((r) => {
                let result = {
                    pageSize: 10,
                    current: 1,
                    data: [],
                    success: false
                }
                setList(r.data)
                setColumns(managerColumns)
                result['data'] = r.data
                result['success'] = true
                return result
            })
        } else {
            result = axios.post(
                "http://localhost:8080/getPeopleListByColumn",
                queryParamsKV,
                {
                    headers: headers
                }
            ).then(r => {
                setList(r.data)
                let result = {
                    pageSize: 10,
                    current: 1,
                    data: [],
                    success: false
                }
                setColumns(peopleColumns)
                result.data = r.data
                result.success = true
                return result
            })
        }
        return result
    }
    let getGridMessage = (ownId) => {
        axios.post(
            "http://localhost:8080/getManageByColumnWithGridMessage",
            {"ownId": ownId},
            {headers: headers}
        ).then((r) => {

            setList(r.data)
        })
    }
    let getNodeData = (value, ele) => {
        //    拿到nodedata之后,传值给request,得到当前节点下所有人员的信息.
        setSearchParams({ownId:ele.nodeData.ownId})
    }
    let managerColumns = [
        {
            title: "网格长",
            dataIndex: "name"
        },
        {
            title: "网格编号",
            dataIndex: "ownId"
        },
        {
            title: "管理网格",
            dataIndex: "gridName"
        },
        {
            title: "联系方式",
            dataIndex: 'phone'
        },
        {
            title: "管理户(户主)",
            dataIndex: "managePeople"
        }
    ]
    let peopleColumns = [
        {
            title: "户号",
            dataIndex: "ownId"
        },
        {
            title: "姓名",
            dataIndex: "name"
        },
        {
            title: "户属性",
            dataIndex: 'homeType'
        },
        {
            title: "与本人关系",
            dataIndex: "relationship"
        },
        {
            title: "性别",
            dataIndex: "sex"
        },
        {
            title: "身份证号",
            dataIndex: "idCard"
        },
        {
            title: "政治面貌",
            dataIndex: "politicalStatus"
        },
        {
            title: "现工作地",
            dataIndex: 'workAddress'
        },
        {
            title: "耕地面积",
            dataIndex: "cultivateArea"
        },
        {
            title: "联系方式",
            dataIndex: 'phone'
        },
    ]

    return (
        <div className={'content'}>
            <div className={'header'}>
                <GridSwitcherHookVersion
                    value={TreeManagers}
                    style={{
                        width:'90%'
                    }}
                    getNodeData={getNodeData}
                />
                <Button onClick={(value)=>{
                    setSearchParams(delete searchParams.ownId)
                }}>
                    重置
                </Button>
                {/*<PeopleFilterBar/>*/}

                {/*<PeopleSearchBar setSearchParams={setParams}/>*/}
                {/*点击查询获取三个的值。做处理后发送请求，查数据返回数据*/}

            </div>
                {/*传入nodedata，三个东西的所有项目，获取左右数据*/}
                    <ProTable
                        columns={peopleColumns}
                        params={searchParams}
                        request={async (
                            // 第一个参数 params 查询表单和 params 参数的结合
                            // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
                            params:{
                                pageSize:10

                        },
                            sort,
                            filter,
                        ) => {
                            // 这里需要返回一个 Promise,在返回之前你可以进行数据转化
                            // 如果需要转化参数可以在这里进行修改
                            return axios.post(
                                'http://localhost:8080/getPeopleListByColumn',
                                params,
                                {
                                    headers: headers
                                }
                            ).then((res) => {
                                return ({
                                    data: res.data,
                                    success: true,
                                })
                            })
                        }}
                        search={{
                            optionRender: false,
                            collapsed: false,
                        }}
                        rowKey={"id"}
                        pagination={{defaultPageSize:10}}
                    />
        </div>
    )
}