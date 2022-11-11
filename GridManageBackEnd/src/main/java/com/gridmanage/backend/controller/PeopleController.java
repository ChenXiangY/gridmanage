package com.gridmanage.backend.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.entity.People;
import com.gridmanage.backend.mapper.ManagersMapperCommon;
import com.gridmanage.backend.mapper.PeopleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tk.mybatis.mapper.entity.Example;

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
    public HashMap<String, Object> getPeopleListByColumn(@RequestBody HashMap queryParam) {
        //  传过来的数据先行处理一下,或者在运行的时候处理一下，删除某个key，改为另外的key

        Example example = new Example(People.class);
        Example.Criteria criteria = example.createCriteria();
        Set<Map.Entry<String, Object>> set = queryParam.entrySet();
        List<String> managersString = new ArrayList<String>();
        for (Map.Entry<String, Object> set1 : set) {
            if (Objects.equals(set1.getKey(), "current") || Objects.equals(set1.getKey(), "pageSize") || set1.getValue() == "") {
                continue;
            }
//            如果传入的是非五级网格的id，则递归查询所有的查询网格以下的所有最末端-五级网格长的信息。
            if (Objects.equals(set1.getKey(), "ownId") && ((String) set1.getValue()).length() < 13) {
//                查出来五级网格编号，循环查询
                List<Managers> fiveLevelManages = this.managersMapperCommon.getXLevelManagersOf((String) set1.getValue());
                fiveLevelManages.forEach((ele) -> {
                    if (ele != null) {
                        managersString.add(ele.getOwnId());
                    }
                });
//                所有五级网格长的id已经找到并存入数组中，用mysql in查找所有fatherId=五级网格长id的群众。
                criteria.andIn("fatherId", managersString);
                continue;
            }
//            处理specialGroup和HomeType和KeyAssistant的情况。
            
            criteria.andEqualTo(set1.getKey(), set1.getValue());
        }
        Page<People> page = PageHelper.startPage((Integer) queryParam.get("current"), (Integer) queryParam.get("pageSize"), true);
        List<People> people = this.peopleMapper.selectByExample(example);
        long total = page.getTotal();
        HashMap<String,Object> result = new HashMap<String,Object>();
        result.put("data",people);
        result.put("extraMessage",total);
        return result;
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
