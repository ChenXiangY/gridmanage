package com.gridmanage.backend.entity;

import javax.persistence.Id;

public class People {
  @Id
  private Integer id;
  private String fatherId;
  private String ownId;
  private long memberCount;
  private String liveAddress;
  private String homeAddress;
  private String homeName;
  private String liveType;
  private String isAgriculture;
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
  private String houseType;
  private String houseFrom;
  private String houseOwnerName;
  private String houseOwnerPhone;
  private String houseOwnerIdCard;
  private String name;
  private String relationship;
  private String sex;
  private long age;
  private String ethnic;
  private String maritalStatus;
  private String politicalStatus;
  private String education;
  private String studyStatus;
  private String militaryService;
  private String career;
  private String workAddress;
  private String idCard;
  private String phone;
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
  private String houseStructure;
  private long houseArea;
  private String roadToHouse;
  private long toiletChanged;
  private long hasTapWater;
  private double cultivateArea;
  private long landTransfer;
  private String primaryIncome;
  private String other;
  private String village;


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


  public long getMemberCount() {
    return memberCount;
  }

  public void setMemberCount(long memberCount) {
    this.memberCount = memberCount;
  }


  public String getLiveAddress() {
    return liveAddress;
  }

  public void setLiveAddress(String liveAddress) {
    this.liveAddress = liveAddress;
  }

  public String getHomeAddress() {
    return homeAddress;
  }

  public void setHomeAddress(String homeAddress) {
    this.homeAddress = homeAddress;
  }


  public String getHomeName() {
    return homeName;
  }

  public void setHomeName(String homeName) {
    this.homeName = homeName;
  }


  public String getLiveType() {
    return liveType;
  }

  public void setLiveType(String liveType) {
    this.liveType = liveType;
  }


  public String getIsAgriculture() {
    return isAgriculture;
  }

  public void setIsAgriculture(String isAgriculture) {
    this.isAgriculture = isAgriculture;
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


  public String getHouseType() {
    return houseType;
  }

  public void setHouseType(String houseType) {
    this.houseType = houseType;
  }


  public String getHouseFrom() {
    return houseFrom;
  }

  public void setHouseFrom(String houseFrom) {
    this.houseFrom = houseFrom;
  }


  public String getHouseOwnerName() {
    return houseOwnerName;
  }

  public void setHouseOwnerName(String houseOwnerName) {
    this.houseOwnerName = houseOwnerName;
  }


  public String getHouseOwnerPhone() {
    return houseOwnerPhone;
  }

  public void setHouseOwnerPhone(String houseOwnerPhone) {
    this.houseOwnerPhone = houseOwnerPhone;
  }


  public String getHouseOwnerIdCard() {
    return houseOwnerIdCard;
  }

  public void setHouseOwnerIdCard(String houseOwnerIdCard) {
    this.houseOwnerIdCard = houseOwnerIdCard;
  }


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public String getRelationship() {
    return relationship;
  }

  public void setRelationship(String relationship) {
    this.relationship = relationship;
  }


  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }


  public long getAge() {
    return age;
  }

  public void setAge(long age) {
    this.age = age;
  }


  public String getEthnic() {
    return ethnic;
  }

  public void setEthnic(String ethnic) {
    this.ethnic = ethnic;
  }


  public String getMaritalStatus() {
    return maritalStatus;
  }

  public void setMaritalStatus(String maritalStatus) {
    this.maritalStatus = maritalStatus;
  }


  public String getPoliticalStatus() {
    return politicalStatus;
  }

  public void setPoliticalStatus(String politicalStatus) {
    this.politicalStatus = politicalStatus;
  }


  public String getEducation() {
    return education;
  }

  public void setEducation(String education) {
    this.education = education;
  }


  public String getStudyStatus() {
    return studyStatus;
  }

  public void setStudyStatus(String studyStatus) {
    this.studyStatus = studyStatus;
  }


  public String getMilitaryService() {
    return militaryService;
  }

  public void setMilitaryService(String militaryService) {
    this.militaryService = militaryService;
  }


  public String getCareer() {
    return career;
  }

  public void setCareer(String career) {
    this.career = career;
  }


  public String getWorkAddress() {
    return workAddress;
  }

  public void setWorkAddress(String workAddress) {
    this.workAddress = workAddress;
  }


  public String getIdCard() {
    return idCard;
  }

  public void setIdCard(String idCard) {
    this.idCard = idCard;
  }


  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
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


  public String getHouseStructure() {
    return houseStructure;
  }

  public void setHouseStructure(String houseStructure) {
    this.houseStructure = houseStructure;
  }


  public long getHouseArea() {
    return houseArea;
  }

  public void setHouseArea(long houseArea) {
    this.houseArea = houseArea;
  }


  public String getRoadToHouse() {
    return roadToHouse;
  }

  public void setRoadToHouse(String roadToHouse) {
    this.roadToHouse = roadToHouse;
  }


  public long getToiletChanged() {
    return toiletChanged;
  }

  public void setToiletChanged(long toiletChanged) {
    this.toiletChanged = toiletChanged;
  }


  public long getHasTapWater() {
    return hasTapWater;
  }

  public void setHasTapWater(long hasTapWater) {
    this.hasTapWater = hasTapWater;
  }


  public double getCultivateArea() {
    return cultivateArea;
  }

  public void setCultivateArea(double cultivateArea) {
    this.cultivateArea = cultivateArea;
  }


  public long getLandTransfer() {
    return landTransfer;
  }

  public void setLandTransfer(long landTransfer) {
    this.landTransfer = landTransfer;
  }


  public String getPrimaryIncome() {
    return primaryIncome;
  }

  public void setPrimaryIncome(String primaryIncome) {
    this.primaryIncome = primaryIncome;
  }


  public String getOther() {
    return other;
  }

  public void setOther(String other) {
    this.other = other;
  }


  public String getVillage() {
    return village;
  }

  public void setVillage(String village) {
    this.village = village;
  }

}
