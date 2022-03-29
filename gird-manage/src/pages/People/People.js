import React, {useEffect, useState} from "react";
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
    const [NodeData, setNodeData] = useState([[],]);
    const [searchParams, setSearchParams] = useState({
        pageSize: 20,
    });
    const [list, setList] = useState([]);
    const [columns, setColumns] = useState([]);
    const [gridMessage, setGridMessage] = useState([]);

    const [test, setTest] = useState(0);

    useEffect(() => {
        getGridMessage("17")
        test1()
    }, []);
    let test1 = () => {
        console.log('test')
        setTest(1)
    }
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
    let getGridMessage = (value) => {
        // 得到网格长信息.
        axios.post("http://localhost:8080/getManagesByColumn",
            {
                ownId: value
            },
            {
                headers: headers
            }).then((r) => {
            console.log(r.data)
            setNodeData(r.data)
        })
        // 得到格情信息
        axios.post(
            'http://localhost:8080/getManagersWithGridMessage'
            , {
                ownId: value
            }, {
                headers: headers
            }
        ).then((r) => {
            setGridMessage(r.data)
        })
    }
    let getNodeData = (value, ele) => {
        //    拿到nodedata之后,传值给request,得到当前节点下所有人员的信息.
        setSearchParams({ownId: ele.nodeData[0].ownId})
        setNodeData(ele.nodeData)
        getGridMessage(value[value.length - 1])
    }
    let homeTypeKeyValue = {
        "homeTypeSimple": "一般户",
        "homeTypeParty": "党员户",
        "homeTypePovertyAlleviation": "脱贫户",
        "homeTypeMonitorHousehold": "监测户",
        "homeTypeRuralAssurance": "农村低保户",
        "homeTypeCityAssurance": "城市低保户",
        "homeTypeKeyPoverty": "重点帮扶关注人员",
        "homeTypeDisabled": "残疾户",
        "homeTypeHasCompany": "",
        "homeTypeJail": "刑满释放户",
        "homeTypePunishment": "社区矫正户",
        "homeTypeDrug": "吸毒人员",
        "homeTypeAccident": "肇事肇祸",
        "homeTypeMentalIllness": "精神障碍人员",
    }
    let specialGroupKeyValue = {
        "SpecialGroupJail": "刑满释放人员",
        "SpecialGroupPunishment": "社区矫正人员",
        "SpecialGroupDrug": "吸毒人员",
        "SpecialGroupAccident": "肇事肇祸人员",
        "SpecialGroupMentalIllness": "精神障碍人员",
    }
    let keyAssistantKeyValue = {
        "KeyAssistantAIDS": "艾滋病人员",
        "KeyAssistantTeenager": "重点青少年",
        "KeyAssistantPetition": "重点上访人员",
        "KeyAssistantIllegalReligion": "非法宗教人员",
        "KeyAssistantMilitary": "涉军人员",
        "KeyAssistantLeft": "留守人员",
        "KeyAssistantWAL": "鳏寡孤独人员",
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
            title: "网格编号",
            dataIndex: "ownId"
        },
        {
            title: "姓名",
            dataIndex: "name"
        },
        {
            title: "户人口",
            dataIndex: "memberCount"
        },
        {
            title: "户属性",
            dataIndex: 'homeType',
            // filters:true,
            // valueType:"select",
            // valueEnum:{
            //     homeTypeSimple: {text:'一般户'},
            //     homeTypeDisabled: {text:'残疾户'}
            // }
        },
        {
            title: "与本人关系",
            dataIndex: "relationship",
        },
        {
            title: "性别",
            dataIndex: "sex"
        },
        {
            title: "年龄",
            dataIndex: "age"
        },
        {
            title: "职业",
            dataIndex: "career"
        },
        {
            title: "特殊人群",
            dataIndex: "specialGroup"
        },
        {
            title: "重点关注人员",
            dataIndex: "keyAssistance"
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
            title: "户耕地面积",
            dataIndex: "cultivateArea"
        },
        {
            title: "联系方式",
            dataIndex: 'phone'
        },
        {
            title: "网格长",
            dataIndex: "fatherId",
            render: (text, record, index, action) => {
                return (
                    <Button
                        onClick={() => {
                            getGridMessage(text)
                        }}>
                        网格详情
                    </Button>
                )
            }
        }
    ]
    let renderBasicMessage = () => {
        const result = NodeData.map((ele) => {
            return (
                <div>
                    <img src={ele.profileImg} alt=""/>
                    <h3>姓名：{ele.name}</h3>
                    <p>联系方式：{ele.phone}</p>
                </div>
            )
        })
        return result
    }
    let handleData = (data) => {
        if (data.length !== 0) {
            data.forEach((ele) => {
                for (let homeType in homeTypeKeyValue) {
                    if (ele[homeType] === true) {
                        if (ele["homeType"] === undefined) {
                            ele["homeType"] = ""
                        }
                        ele["homeType"] += homeTypeKeyValue[homeType]
                    }
                }
            })
        }
    }
    return (
        <div className={'content'}>
            <div className={'header'}>
                <GridSwitcherHookVersion
                    value={TreeManagers}
                    style={{
                        width: '90%'
                    }}
                    getNodeData={getNodeData}
                />
                <Button onClick={(value) => {
                    setSearchParams(delete searchParams.ownId)
                }}>
                    重置
                </Button>
                {/*<PeopleFilterBar/>*/}

                {/*<PeopleSearchBar setSearchParams={setParams}/>*/}
                {/*点击查询获取三个的值。做处理后发送请求，查数据返回数据*/}

            </div>
            {/*传入nodedata，三个东西的所有项目，获取左右数据*/}
            <div>
                <ProCard split={"vertical"}>
                    <ProCard className={"GridMessage"} colSpan={"20%"}
                    >
                        <div style={{
                            display: NodeData.length === 0 ? "None" : "flex"
                        }}>
                            <div className={'gridMessage'}>
                                {renderBasicMessage()}
                                <p>网格编号：{NodeData[0].ownId}</p>
                                <p>网格名称：{NodeData[0].gridName}</p>
                                <p>人口:{gridMessage.memberCount}</p>
                                <p>一般户数量:{gridMessage.homeTypeSimple}</p>
                                <p>党员户数量:{gridMessage.homeTypeParty}</p>
                                <p>脱贫户数量:{gridMessage.homeTypePovertyAlleviation}</p>
                                <p>监测户数量:{gridMessage.homeTypeMonitorHousehold}</p>
                                <p>城市低保户:{gridMessage.homeTypeCityAssurance}</p>
                                <p>重点帮扶关注人员数量:{gridMessage.homeTypeKeyPoverty}</p>
                                <p>残疾户数量:{gridMessage.homeTypeDisabled}</p>
                                <p>刑满释放户数量:{gridMessage.homeTypeJail}</p>
                                <p>社区矫正户数量:{gridMessage.homeTypePunishment}</p>
                                <p>吸毒人员数量:{gridMessage.homeTypeDrug}</p>
                                <p>肇事肇祸数量:{gridMessage.homeTypeAccident}</p>
                                <p>精神障碍人员数量:{gridMessage.homeTypeMentalIllness}</p>
                                <p>接种新冠疫苗数量:{gridMessage.hasCovidVaccine}</p>
                                <p>参加医疗保险人员:{gridMessage.hasMedicalInsurance}</p>
                                <p>参加养老保险人员:{gridMessage.hasPension}</p>
                                <p>平均住房面积:{gridMessage.houseArea}</p>
                                <p>改厕户数量:{gridMessage.toiletChanged}</p>
                                <p>通自来水数量:{gridMessage.hasTapWater}</p>
                                <p>平均耕地面积:{gridMessage.cultivateArea}</p>
                            </div>
                        </div>
                    </ProCard>
                    <ProCard>
                        <ProTable
                            columns={peopleColumns}
                            params={searchParams}
                            request={async (
                                // 第一个参数 params 查询表单和 params 参数的结合
                                // 第一个参数中一定会有 pageSize 和  current ，这两个参数是 antd 的规范
                                params: {
                                    pageSize: 20
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
                                    //处理res.data,处理户属性,特殊人群,重点帮扶人员
                                    handleData(res.data.data)
                                    return ({
                                        data: res.data.data,
                                        success: true,
                                        total: res.data.extraMessage
                                    })
                                })
                            }}
                            search={{
                                optionRender: false,
                                collapsed: false,
                            }}
                            rowKey={"id"}
                            pagination={{
                                defaultPageSize: 20, onChange: (page, pageSize) => {

                                }
                            }}
                        />
                    </ProCard>
                </ProCard>
            </div>
        </div>
    )
}