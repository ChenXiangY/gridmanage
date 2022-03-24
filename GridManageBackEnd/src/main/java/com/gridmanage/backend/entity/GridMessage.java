package com.gridmanage.backend.entity;

import javax.persistence.Id;
import java.util.List;

public class GridMessage {
    @Id
    private Integer id;

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

    public List<People> getManagePeople() {
        return managePeople;
    }

    public void setManagePeople(List<People> managePeople) {
        this.managePeople = managePeople;
    }

    public Integer getGridLevel() {
        return gridLevel;
    }

    public void setGridLevel(Integer gridLevel) {
        this.gridLevel = gridLevel;
    }

    public Integer getHomeCount() {
        return homeCount;
    }

    public void setHomeCount(Integer homeCount) {
        this.homeCount = homeCount;
    }

    public Integer getMemberCount() {
        return memberCount;
    }

    public void setMemberCount(Integer memberCount) {
        this.memberCount = memberCount;
    }

    public Integer getSex() {
        return sex;
    }

    public void setSex(Integer sex) {
        this.sex = sex;
    }

    public long getHomeTypeSimple() {
        return homeTypeSimple;
    }

    public void setHomeTypeSimple(long homeTypeSimple) {
        this.homeTypeSimple = homeTypeSimple;
    }

    public long getHomeTypeParty() {
        return homeTypeParty;
    }

    public void setHomeTypeParty(long homeTypeParty) {
        this.homeTypeParty = homeTypeParty;
    }

    public long getHomeTypePovertyAlleviation() {
        return homeTypePovertyAlleviation;
    }

    public void setHomeTypePovertyAlleviation(long homeTypePovertyAlleviation) {
        this.homeTypePovertyAlleviation = homeTypePovertyAlleviation;
    }

    public long getHomeTypeMonitorHousehold() {
        return homeTypeMonitorHousehold;
    }

    public void setHomeTypeMonitorHousehold(long homeTypeMonitorHousehold) {
        this.homeTypeMonitorHousehold = homeTypeMonitorHousehold;
    }

    public long getHomeTypeRuralAssurance() {
        return homeTypeRuralAssurance;
    }

    public void setHomeTypeRuralAssurance(long homeTypeRuralAssurance) {
        this.homeTypeRuralAssurance = homeTypeRuralAssurance;
    }

    public long getHomeTypeCityAssurance() {
        return homeTypeCityAssurance;
    }

    public void setHomeTypeCityAssurance(long homeTypeCityAssurance) {
        this.homeTypeCityAssurance = homeTypeCityAssurance;
    }

    public long getHomeTypeKeyPoverty() {
        return homeTypeKeyPoverty;
    }

    public void setHomeTypeKeyPoverty(long homeTypeKeyPoverty) {
        this.homeTypeKeyPoverty = homeTypeKeyPoverty;
    }

    public long getHomeTypeDisabled() {
        return homeTypeDisabled;
    }

    public void setHomeTypeDisabled(long homeTypeDisabled) {
        this.homeTypeDisabled = homeTypeDisabled;
    }

    public long getHomeTypeHasCompany() {
        return homeTypeHasCompany;
    }

    public void setHomeTypeHasCompany(long homeTypeHasCompany) {
        this.homeTypeHasCompany = homeTypeHasCompany;
    }

    public long getHomeTypeJail() {
        return homeTypeJail;
    }

    public void setHomeTypeJail(long homeTypeJail) {
        this.homeTypeJail = homeTypeJail;
    }

    public long getHomeTypePunishment() {
        return homeTypePunishment;
    }

    public void setHomeTypePunishment(long homeTypePunishment) {
        this.homeTypePunishment = homeTypePunishment;
    }

    public long getHomeTypeDrug() {
        return homeTypeDrug;
    }

    public void setHomeTypeDrug(long homeTypeDrug) {
        this.homeTypeDrug = homeTypeDrug;
    }

    public long getHomeTypeAccident() {
        return homeTypeAccident;
    }

    public void setHomeTypeAccident(long homeTypeAccident) {
        this.homeTypeAccident = homeTypeAccident;
    }

    public long getHomeTypeMentalIllness() {
        return homeTypeMentalIllness;
    }

    public void setHomeTypeMentalIllness(long homeTypeMentalIllness) {
        this.homeTypeMentalIllness = homeTypeMentalIllness;
    }

    public long getSpecialGroupJail() {
        return specialGroupJail;
    }

    public void setSpecialGroupJail(long specialGroupJail) {
        this.specialGroupJail = specialGroupJail;
    }

    public long getSpecialGroupPunishment() {
        return specialGroupPunishment;
    }

    public void setSpecialGroupPunishment(long specialGroupPunishment) {
        this.specialGroupPunishment = specialGroupPunishment;
    }

    public long getSpecialGroupDrug() {
        return specialGroupDrug;
    }

    public void setSpecialGroupDrug(long specialGroupDrug) {
        this.specialGroupDrug = specialGroupDrug;
    }

    public long getSpecialGroupAccident() {
        return specialGroupAccident;
    }

    public void setSpecialGroupAccident(long specialGroupAccident) {
        this.specialGroupAccident = specialGroupAccident;
    }

    public long getSpecialGroupMentalIllness() {
        return specialGroupMentalIllness;
    }

    public void setSpecialGroupMentalIllness(long specialGroupMentalIllness) {
        this.specialGroupMentalIllness = specialGroupMentalIllness;
    }

    public long getKeyAssistantAids() {
        return keyAssistantAids;
    }

    public void setKeyAssistantAids(long keyAssistantAids) {
        this.keyAssistantAids = keyAssistantAids;
    }

    public long getKeyAssistantTeenager() {
        return keyAssistantTeenager;
    }

    public void setKeyAssistantTeenager(long keyAssistantTeenager) {
        this.keyAssistantTeenager = keyAssistantTeenager;
    }

    public long getKeyAssistantPetition() {
        return keyAssistantPetition;
    }

    public void setKeyAssistantPetition(long keyAssistantPetition) {
        this.keyAssistantPetition = keyAssistantPetition;
    }

    public long getKeyAssistantIllegalReligion() {
        return keyAssistantIllegalReligion;
    }

    public void setKeyAssistantIllegalReligion(long keyAssistantIllegalReligion) {
        this.keyAssistantIllegalReligion = keyAssistantIllegalReligion;
    }

    public long getKeyAssistantMilitary() {
        return keyAssistantMilitary;
    }

    public void setKeyAssistantMilitary(long keyAssistantMilitary) {
        this.keyAssistantMilitary = keyAssistantMilitary;
    }

    public long getKeyAssistantLeft() {
        return keyAssistantLeft;
    }

    public void setKeyAssistantLeft(long keyAssistantLeft) {
        this.keyAssistantLeft = keyAssistantLeft;
    }

    public long getKeyAssistantWal() {
        return keyAssistantWal;
    }

    public void setKeyAssistantWal(long keyAssistantWal) {
        this.keyAssistantWal = keyAssistantWal;
    }

    public long getHasCovidVaccine() {
        return hasCovidVaccine;
    }

    public void setHasCovidVaccine(long hasCovidVaccine) {
        this.hasCovidVaccine = hasCovidVaccine;
    }

    public long getHasMedicalInsurance() {
        return hasMedicalInsurance;
    }

    public void setHasMedicalInsurance(long hasMedicalInsurance) {
        this.hasMedicalInsurance = hasMedicalInsurance;
    }

    public long getHasPension() {
        return hasPension;
    }

    public void setHasPension(long hasPension) {
        this.hasPension = hasPension;
    }

    public long getHouseArea() {
        return houseArea;
    }

    public void setHouseArea(long houseArea) {
        this.houseArea = houseArea;
    }

    public double getCultivateArea() {
        return cultivateArea;
    }

    public void setCultivateArea(double cultivateArea) {
        this.cultivateArea = cultivateArea;
    }

    public String getVillage() {
        return village;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    @Override
    public String toString() {
        return "GridMessage{" +
                "id=" + id +
                ", fatherId='" + fatherId + '\'' +
                ", ownId='" + ownId + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", profileImg='" + profileImg + '\'' +
                ", gridName='" + gridName + '\'' +
                ", managePeople=" + managePeople +
                ", gridLevel=" + gridLevel +
                ", home=" + homeCount +
                ", people=" + memberCount +
                ", sex=" + sex +
                ", homeTypeSimple=" + homeTypeSimple +
                ", homeTypeParty=" + homeTypeParty +
                ", homeTypePovertyAlleviation=" + homeTypePovertyAlleviation +
                ", homeTypeMonitorHousehold=" + homeTypeMonitorHousehold +
                ", homeTypeRuralAssurance=" + homeTypeRuralAssurance +
                ", homeTypeCityAssurance=" + homeTypeCityAssurance +
                ", homeTypeKeyPoverty=" + homeTypeKeyPoverty +
                ", homeTypeDisabled=" + homeTypeDisabled +
                ", homeTypeHasCompany=" + homeTypeHasCompany +
                ", homeTypeJail=" + homeTypeJail +
                ", homeTypePunishment=" + homeTypePunishment +
                ", homeTypeDrug=" + homeTypeDrug +
                ", homeTypeAccident=" + homeTypeAccident +
                ", homeTypeMentalIllness=" + homeTypeMentalIllness +
                ", specialGroupJail=" + specialGroupJail +
                ", specialGroupPunishment=" + specialGroupPunishment +
                ", specialGroupDrug=" + specialGroupDrug +
                ", specialGroupAccident=" + specialGroupAccident +
                ", specialGroupMentalIllness=" + specialGroupMentalIllness +
                ", keyAssistantAids=" + keyAssistantAids +
                ", keyAssistantTeenager=" + keyAssistantTeenager +
                ", keyAssistantPetition=" + keyAssistantPetition +
                ", keyAssistantIllegalReligion=" + keyAssistantIllegalReligion +
                ", keyAssistantMilitary=" + keyAssistantMilitary +
                ", keyAssistantLeft=" + keyAssistantLeft +
                ", keyAssistantWal=" + keyAssistantWal +
                ", hasCovidVaccine=" + hasCovidVaccine +
                ", hasMedicalInsurance=" + hasMedicalInsurance +
                ", hasPension=" + hasPension +
                ", houseArea=" + houseArea +
                ", cultivateArea=" + cultivateArea +
                ", village='" + village + '\'' +
                '}';
    }

    private String  fatherId;
    private String ownId;
    private String name;
    private String phone;
    private String profileImg;
    private String gridName;
    private List<People> managePeople;
    private Integer gridLevel;
    private Integer homeCount;
    private Integer memberCount;
    private Integer sex;
    private long homeTypeSimple;
    private long homeTypeParty;
    private long homeTypePovertyAlleviation;
    private long homeTypeMonitorHousehold;
    private long homeTypeRuralAssurance;
    private long homeTypeCityAssurance;
    private long homeTypeKeyPoverty;
    private long homeTypeDisabled;
    private long homeTypeHasCompany;
    private long homeTypeJail;
    private long homeTypePunishment;
    private long homeTypeDrug;
    private long homeTypeAccident;
    private long homeTypeMentalIllness;
    private long specialGroupJail;
    private long specialGroupPunishment;
    private long specialGroupDrug;
    private long specialGroupAccident;
    private long specialGroupMentalIllness;
    private long keyAssistantAids;
    private long keyAssistantTeenager;
    private long keyAssistantPetition;
    private long keyAssistantIllegalReligion;
    private long keyAssistantMilitary;
    private long keyAssistantLeft;
    private long keyAssistantWal;
    private long hasCovidVaccine;
    private long hasMedicalInsurance;
    private long hasPension;
    private long houseArea;
    private double cultivateArea;
    private String village;

}
