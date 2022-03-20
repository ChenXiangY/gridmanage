package com.gridmanage.backend.controller;

import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.entity.People;
import com.gridmanage.backend.mapper.ManagerMapper;
import com.gridmanage.backend.mapper.ManagersMapperCommon;
import com.gridmanage.backend.mapper.PeopleMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.configurationprocessor.json.JSONObject;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Example;
import tk.mybatis.spring.annotation.MapperScan;

import javax.swing.*;
import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PeopleController {

    @Autowired
    private PeopleMapper peopleMapper;

    @Autowired
    private ManagersMapperCommon managersMapperCommon;

    @ResponseBody
    @RequestMapping("getPeopleListByColumn")
    public List<People> getPeopleListByColumn(@RequestBody HashMap queryParam) {
        Example example = new Example(People.class);
        Example.Criteria criteria = example.createCriteria();
        Set<Map.Entry<String, Object>> set = queryParam.entrySet();
        List<String> managersString = new ArrayList<String>();
        for (Map.Entry<String, Object> set1 : set) {
            if (Objects.equals(set1.getKey(), "current") || Objects.equals(set1.getKey(), "pageSize") || set1.getValue() == "") {
                continue;
            }
            if (Objects.equals(set1.getKey(), "ownId")) {
//                查出来五级网格编号，循环查询
                List<Managers> fiveLevelManages = this.managersMapperCommon.getXLevelManagersOf((String) set1.getValue());
                fiveLevelManages.forEach((ele) -> {
                    if (ele != null) {
                        managersString.add(ele.getOwnId());
                    }
                });
                criteria.andIn("fatherId", managersString);
                continue;
            }
            criteria.andEqualTo(set1.getKey(), set1.getValue());
        }
        return this.peopleMapper.selectByExample(example);
    }

    @ResponseBody
    @RequestMapping
    public List<People> getAllPeopleWithPagination() {
        return this.peopleMapper.selectAll();
    }


    @ResponseBody
    @RequestMapping("/getAllPeopleByOwnId")
    public List<People> getAllPeopleByOwnId(String ownId) {
        return this.peopleMapper.getPeopleByOwnId(ownId);
    }
}
