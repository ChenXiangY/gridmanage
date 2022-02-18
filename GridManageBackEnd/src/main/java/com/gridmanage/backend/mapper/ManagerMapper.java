package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.Manager;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ManagerMapper {
    public Manager findManagerByOwnid(String ownid);
    public List<Manager> findAllManagers();
}
