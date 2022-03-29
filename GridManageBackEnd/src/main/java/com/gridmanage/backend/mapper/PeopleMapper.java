package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.People;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.annotation.RegisterMapper;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;


public interface PeopleMapper extends Mapper<People> {
    @Select("select people.* from (with recursive temp as ( select * from managers where #{ownId} = ownId UNION ALL select managers.* from managers ,temp where temp.ownId=managers.fatherId)select * from temp where temp.gridLevel=5) temp1,people where people.fatherId=temp1.ownId;")
    List<People> getPeopleByOwnId(@Param("ownId") String ownId);
}
