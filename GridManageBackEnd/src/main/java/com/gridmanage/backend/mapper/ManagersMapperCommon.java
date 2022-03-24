package com.gridmanage.backend.mapper;

import com.gridmanage.backend.entity.GridMessage;
import com.gridmanage.backend.entity.Managers;
import com.gridmanage.backend.entity.People;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public interface ManagersMapperCommon extends Mapper<Managers> {

    @Select("(with recursive temp as (select * from managers where ownId = #{ownId} union all select managers.* from managers, temp where temp.ownId = managers.fatherId )select * from temp where gridLevel=5)")
    List<Managers> getXLevelManagersOf(@Param("ownId") String ownId);

    @Select("""
select
        count(id) as homeCount ,
       sum(memberCount) as memberCount ,
       sum(sex='男') as sex ,
       sum(homeTypeSimple) as homeTypeSimple ,
       sum(homeTypeParty) as homeTypeParty ,
       sum(homeTypePovertyAlleviation) as homeTypePovertyAlleviation ,
       sum(homeTypeMonitorHousehold) as homeTypeMonitorHousehold ,
       sum(homeTypeRuralAssurance) as homeTypeRuralAssurance ,
       sum(homeTypeCityAssurance) as homeTypeCityAssurance ,
       sum(homeTypeKeyPoverty) as homeTypeKeyPoverty ,
       sum(homeTypeDisabled) as homeTypeDisabled ,
       sum(homeTypeHasCompany) as homeTypeHasCompany ,
       sum(homeTypeJail) as homeTypeJail ,
       sum(homeTypePunishment) as homeTypePunishment ,
       sum(homeTypeDrug) as homeTypeDrug ,
       sum(homeTypeAccident) as homeTypeAccident ,
       sum(homeTypeMentalIllness) as homeTypeMentalIllness ,
       sum(specialGroupJail) as specialGroupJail ,
       sum(specialGroupPunishment) as specialGroupPunishment ,
       sum(specialGroupDrug) as specialGroupDrug ,
       sum(specialGroupAccident) as specialGroupAccident ,
       sum(specialGroupMentalIllness) as specialGroupMentalIllness ,
       sum(keyAssistantAids) as keyAssistantAids ,
       sum(keyAssistantTeenager) as keyAssistantTeenager ,
       sum(keyAssistantPetition) as keyAssistantPetition ,
       sum(keyAssistantIllegalReligion) as keyAssistantIllegalReligion ,
       sum(keyAssistantMilitary) as keyAssistantMilitary ,
       sum(keyAssistantLeft) as keyAssistantLeft ,
       sum(keyAssistantWal) as keyAssistantWal ,
       sum(hasCovidVaccine) as hasCovidVaccine ,
       sum(hasMedicalInsurance) as hasMedicalInsurance ,
       sum(hasPension) as hasPension ,
       avg(houseArea) as houseArea ,
       sum(cultivateArea) as cultivateArea,
       sum(toiletChanged) as toiletChanged,
       sum(hasTapWater) as hasTapWater
from (select people.*
      from (with recursive temp as (
          select *
          from managers
          where ownId = #{ownId}
          union all
          select managers.*
          from managers,
               temp
          where temp.ownId = managers.fatherId
      )
            select *
            from temp
            where gridLevel = 5) managerResult,
           people
      where people.fatherId = managerResult.ownId
        and people.relationship = '本人') as lastResult
            """)
    GridMessage getManagersWithGridMessage(@Param("ownId") String ownId);

}
