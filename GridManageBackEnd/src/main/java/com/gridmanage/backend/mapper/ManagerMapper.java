package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.GridMessage;
import com.gridmanage.backend.entity.Managers;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ManagerMapper {
    public Managers findManagerByOwnId(String ownid);
    public List<Managers> findAllManagers();
    public List<GridMessage> ManagersMapperWithGridMessage();
}
