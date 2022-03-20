package com.gridmanage.backend.entity;

import javax.persistence.Id;
import java.util.List;

public class Managers {


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFatherId() {
        return fatherId;
    }

    public void setFatherId(String fatherId) {
        this.fatherId = fatherId;
    }

    public String getOwnId() {
        return ownId;
    }

    public void setOwnId(String ownId) {
        this.ownId = ownId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProfileImg() {
        return profileImg;
    }

    public void setProfileImg(String profileImg) {
        this.profileImg = profileImg;
    }

    public String getGridName() {
        return gridName;
    }

    public void setGridName(String gridName) {
        this.gridName = gridName;
    }

    @Id
    private Integer id;
    private String  fatherId;
    private String ownId;
    private String name;
    private String phone;
    private String profileImg;
    private String gridName;
    private List<People> managePeople;
    private Integer gridLevel;



    public Integer getGridLevel() {
        return gridLevel;
    }

    public void setGridLevel(Integer gridLevel) {
        this.gridLevel = gridLevel;
    }



    public List<People> getManagePeople() {
        return managePeople;
    }

    public void setManagePeople(List<People> managePeople) {
        this.managePeople = managePeople;
    }

    //    五级网格长用所包户户主姓名





    @Override
    public String toString() {
        return "Managers{" +
                "id=" + id +
                ", fatherId='" + fatherId + '\'' +
                ", ownId='" + ownId + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", gridName='" + gridName + '\'' +
                ", managePeople=" + managePeople +
                ", gridLevel=" + gridLevel +
                '}';
    }
}
