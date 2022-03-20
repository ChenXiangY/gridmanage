package com.gridmanage.backend.controller;

import com.alibaba.druid.sql.ast.statement.SQLWithSubqueryClause;
import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.entity.People;
import com.gridmanage.backend.mapper.ManagersMapperCommon;
import com.gridmanage.backend.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Example;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ManagerController {

    @Autowired
    private ManagerService managerService;

    @Autowired
    private ManagersMapperCommon managersMapperCommon;

    @ResponseBody
    @RequestMapping("/getAllManagers")
    public List<Managers> Hello() {
        List<Managers> managers = this.managersMapperCommon.selectAll();
        return managers;
    }

    @ResponseBody
    @RequestMapping("/")
    public String root1() {
        return new Managers().toString();
    }

    @ResponseBody
    @RequestMapping("/getManagesByColumn")
    public List<Managers> getManagesByColumn(@RequestBody HashMap<String, Object> queryParam) {
        Example example = new Example(Managers.class);
        Example.Criteria criteria = example.createCriteria();
        Set<Map.Entry<String, Object>> set = queryParam.entrySet();
        for (Map.Entry<String, Object> set1 : set) {
            criteria.andEqualTo(set1.getKey(), set1.getValue());
        }
        return this.managersMapperCommon.selectByExample(example);
    }



}

