package com.gridmanage.backend.controller;

import com.gridmanage.backend.entity.Manager;
import com.gridmanage.backend.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ManagerController {

    @Autowired
    private ManagerService managerService;


    @ResponseBody
    @RequestMapping("/getAllManagers")
    public List<Manager> Hello(){
        List<Manager> managers = this.managerService.findAllManager();
        return managers;
    }
    @ResponseBody
    @RequestMapping("/")
    public String root1(){
        return new Manager().toString();
    }

    }

