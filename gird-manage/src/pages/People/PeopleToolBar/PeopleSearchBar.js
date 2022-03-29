import {Input, Space} from 'antd';
import {AudioOutlined} from '@ant-design/icons';
import Search from "antd/es/input/Search";
import {Select} from "antd/es";
import {useState} from "react";
import axios from "axios";

export default function PeopleSearchBar(props) {

    const [searchSelectStatus, setSearchSelectStatus] = useState();
    const [searchInputStatus, setSearchInputStatus] = useState();
    let selectValue = 'name'
    let selectOption = [
        {
            value: "name",
            label: "姓名"
        },
        {
            value: "idCard",
            label: "身份证号码"
        },
        {
            value: "fatherId",
            label: "所属网格编号"
        }, {
            value: "ownId",
            label: "户号"
        }
    ]

    let onSearch = (value) => {
        if(searchInputStatus==='error'){
            return
        }
        let queryParamsKV = {}
        queryParamsKV[selectValue] = value
        props.setSearchParams(queryParamsKV)
    }


    return (
        <Input.Group compact>
            <Select
                options={selectOption}
                status={searchSelectStatus}
                defaultValue={selectValue}
                onChange={(e) => {
                    selectValue = e
                }}
            />
            <Search
                placeholder="请输入搜索信息"
                allowClear
                status={searchInputStatus}
                onChange={(e) => {
                    let value = e.target.value
                    setSearchInputStatus(value.trim() === '' ? 'error' : "")
                }}
                onSearch={onSearch}
                style={{width: 200}}
            />

        </Input.Group>
    )

}