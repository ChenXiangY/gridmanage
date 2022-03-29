package com.gridmanage.backend.service.impl;

import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.mapper.ManagerMapper;
import com.gridmanage.backend.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private ManagerMapper managerMapper;
    @Override
    public List<Managers> findAllManager() {
        return this.managerMapper.findAllManagers();
    }
}
