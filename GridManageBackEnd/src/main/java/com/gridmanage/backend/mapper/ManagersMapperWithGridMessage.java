package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.GridMessage;
import com.gridmanage.backend.entity.People;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

@org.apache.ibatis.annotations.Mapper
public interface ManagersMapperWithGridMessage extends Mapper<People>{
}
