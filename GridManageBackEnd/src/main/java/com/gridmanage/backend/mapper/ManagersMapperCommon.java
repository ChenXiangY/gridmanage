package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.entity.People;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface ManagersMapperCommon extends Mapper<Managers> {

    @Select("(with recursive temp as (select * from managers where ownId = #{ownId} union all select managers.* from managers, temp where temp.ownId = managers.fatherId )select * from temp where gridLevel=5)")
    List<Managers> getXLevelManagersOf(@Param("ownId") String ownId);
}
