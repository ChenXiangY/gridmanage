package com.gridmanage.backend.entity;

import javax.persistence.Id;

public class People {
  @Id
  private Integer id;
  private String fatherId;
  private String ownId;
  private Integer memberCount;
  private String liveAddress;
  private String homeAddress;
  private String homeName;
  private String liveType;
  private String isAgriculture;
  private Boolean homeTypeSimple;
  private Boolean homeTypeParty;
  private Boolean homeTypePovertyAlleviation;
  private Boolean homeTypeMonitorHousehold;
  private Boolean homeTypeRuralAssurance;
  private Boolean homeTypeCityAssurance;
  private Boolean homeTypeKeyPoverty;
  private Boolean homeTypeDisabled;
  private Boolean homeTypeHasCompany;
  private Boolean homeTypeJail;
  private Boolean homeTypePunishment;
  private Boolean homeTypeDrug;
  private Boolean homeTypeAccident;
  private Boolean homeTypeMentalIllness;
  private String houseType;
  private String houseFrom;
  private String houseOwnerName;
  private String houseOwnerPhone;
  private String houseOwnerIdCard;
  private String name;
  private String relationship;
  private String sex;
  private Integer age;
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
  private Boolean specialGroupJail;
  private Boolean specialGroupPunishment;
  private Boolean specialGroupDrug;
  private Boolean specialGroupAccident;
  private Boolean specialGroupMentalIllness;
  private Boolean keyAssistantAids;
  private Boolean keyAssistantTeenager;
  private Boolean keyAssistantPetition;
  private Boolean keyAssistantIllegalReligion;
  private Boolean keyAssistantMilitary;
  private Boolean keyAssistantLeft;
  private Boolean keyAssistantWAL;
  private Boolean hasCovidVaccine;
  private Boolean hasMedicalInsurance;
  private Boolean hasPension;
  private String houseStructure;
  private Integer houseArea;
  private String roadToHouse;
  private Boolean toiletChanged;
  private Boolean hasTapWater;
  private Float cultivateArea;
  private Boolean landTransfer;
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

  public Integer getMemberCount() {
    return memberCount;
  }

  public void setMemberCount(Integer memberCount) {
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

  public Boolean getHomeTypeSimple() {
    return homeTypeSimple;
  }

  public void setHomeTypeSimple(Boolean homeTypeSimple) {
    this.homeTypeSimple = homeTypeSimple;
  }

  public Boolean isHomeTypeParty() {
    return homeTypeParty;
  }

  public void setHomeTypeParty(Boolean homeTypeParty) {
    this.homeTypeParty = homeTypeParty;
  }

  public Boolean isHomeTypePovertyAlleviation() {
    return homeTypePovertyAlleviation;
  }

  public void setHomeTypePovertyAlleviation(Boolean homeTypePovertyAlleviation) {
    this.homeTypePovertyAlleviation = homeTypePovertyAlleviation;
  }

  public Boolean isHomeTypeMonitorHousehold() {
    return homeTypeMonitorHousehold;
  }

  public void setHomeTypeMonitorHousehold(Boolean homeTypeMonitorHousehold) {
    this.homeTypeMonitorHousehold = homeTypeMonitorHousehold;
  }

  public Boolean isHomeTypeRuralAssurance() {
    return homeTypeRuralAssurance;
  }

  public void setHomeTypeRuralAssurance(Boolean homeTypeRuralAssurance) {
    this.homeTypeRuralAssurance = homeTypeRuralAssurance;
  }

  public Boolean isHomeTypeCityAssurance() {
    return homeTypeCityAssurance;
  }

  public void setHomeTypeCityAssurance(Boolean homeTypeCityAssurance) {
    this.homeTypeCityAssurance = homeTypeCityAssurance;
  }

  public Boolean isHomeTypeKeyPoverty() {
    return homeTypeKeyPoverty;
  }

  public void setHomeTypeKeyPoverty(Boolean homeTypeKeyPoverty) {
    this.homeTypeKeyPoverty = homeTypeKeyPoverty;
  }

  public Boolean isHomeTypeDisabled() {
    return homeTypeDisabled;
  }

  public void setHomeTypeDisabled(Boolean homeTypeDisabled) {
    this.homeTypeDisabled = homeTypeDisabled;
  }

  public Boolean isHomeTypeHasCompany() {
    return homeTypeHasCompany;
  }

  public void setHomeTypeHasCompany(Boolean homeTypeHasCompany) {
    this.homeTypeHasCompany = homeTypeHasCompany;
  }

  public Boolean isHomeTypeJail() {
    return homeTypeJail;
  }

  public void setHomeTypeJail(Boolean homeTypeJail) {
    this.homeTypeJail = homeTypeJail;
  }

  public Boolean isHomeTypePunishment() {
    return homeTypePunishment;
  }

  public void setHomeTypePunishment(Boolean homeTypePunishment) {
    this.homeTypePunishment = homeTypePunishment;
  }

  public Boolean isHomeTypeDrug() {
    return homeTypeDrug;
  }

  public void setHomeTypeDrug(Boolean homeTypeDrug) {
    this.homeTypeDrug = homeTypeDrug;
  }

  public Boolean isHomeTypeAccident() {
    return homeTypeAccident;
  }

  public void setHomeTypeAccident(Boolean homeTypeAccident) {
    this.homeTypeAccident = homeTypeAccident;
  }

  public Boolean isHomeTypeMentalIllness() {
    return homeTypeMentalIllness;
  }

  public void setHomeTypeMentalIllness(Boolean homeTypeMentalIllness) {
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

  public Integer getAge() {
    return age;
  }

  public void setAge(Integer age) {
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

  public Boolean isSpecialGroupJail() {
    return specialGroupJail;
  }

  public void setSpecialGroupJail(Boolean specialGroupJail) {
    this.specialGroupJail = specialGroupJail;
  }

  public Boolean isSpecialGroupPunishment() {
    return specialGroupPunishment;
  }

  public void setSpecialGroupPunishment(Boolean specialGroupPunishment) {
    this.specialGroupPunishment = specialGroupPunishment;
  }

  public Boolean isSpecialGroupDrug() {
    return specialGroupDrug;
  }

  public void setSpecialGroupDrug(Boolean specialGroupDrug) {
    this.specialGroupDrug = specialGroupDrug;
  }

  public Boolean isSpecialGroupAccident() {
    return specialGroupAccident;
  }

  public void setSpecialGroupAccident(Boolean specialGroupAccident) {
    this.specialGroupAccident = specialGroupAccident;
  }

  public Boolean isSpecialGroupMentalIllness() {
    return specialGroupMentalIllness;
  }

  public void setSpecialGroupMentalIllness(Boolean specialGroupMentalIllness) {
    this.specialGroupMentalIllness = specialGroupMentalIllness;
  }

  public Boolean isKeyAssistantAids() {
    return keyAssistantAids;
  }

  public void setKeyAssistantAids(Boolean keyAssistantAids) {
    this.keyAssistantAids = keyAssistantAids;
  }

  public Boolean isKeyAssistantTeenager() {
    return keyAssistantTeenager;
  }

  public void setKeyAssistantTeenager(Boolean keyAssistantTeenager) {
    this.keyAssistantTeenager = keyAssistantTeenager;
  }

  public Boolean isKeyAssistantPetition() {
    return keyAssistantPetition;
  }

  public void setKeyAssistantPetition(Boolean keyAssistantPetition) {
    this.keyAssistantPetition = keyAssistantPetition;
  }

  public Boolean isKeyAssistantIllegalReligion() {
    return keyAssistantIllegalReligion;
  }

  public void setKeyAssistantIllegalReligion(Boolean keyAssistantIllegalReligion) {
    this.keyAssistantIllegalReligion = keyAssistantIllegalReligion;
  }

  public Boolean isKeyAssistantMilitary() {
    return keyAssistantMilitary;
  }

  public void setKeyAssistantMilitary(Boolean keyAssistantMilitary) {
    this.keyAssistantMilitary = keyAssistantMilitary;
  }

  public Boolean isKeyAssistantLeft() {
    return keyAssistantLeft;
  }

  public void setKeyAssistantLeft(Boolean keyAssistantLeft) {
    this.keyAssistantLeft = keyAssistantLeft;
  }

  public Boolean isKeyAssistantWAL() {
    return keyAssistantWAL;
  }

  public void setKeyAssistantWAL(Boolean keyAssistantWAL) {
    this.keyAssistantWAL = keyAssistantWAL;
  }

  public Boolean isHasCovidVaccine() {
    return hasCovidVaccine;
  }

  public void setHasCovidVaccine(Boolean hasCovidVaccine) {
    this.hasCovidVaccine = hasCovidVaccine;
  }

  public Boolean isHasMedicalInsurance() {
    return hasMedicalInsurance;
  }

  public void setHasMedicalInsurance(Boolean hasMedicalInsurance) {
    this.hasMedicalInsurance = hasMedicalInsurance;
  }

  public Boolean isHasPension() {
    return hasPension;
  }

  public void setHasPension(Boolean hasPension) {
    this.hasPension = hasPension;
  }

  public String getHouseStructure() {
    return houseStructure;
  }

  public void setHouseStructure(String houseStructure) {
    this.houseStructure = houseStructure;
  }

  public Integer getHouseArea() {
    return houseArea;
  }

  public void setHouseArea(Integer houseArea) {
    this.houseArea = houseArea;
  }

  public String getRoadToHouse() {
    return roadToHouse;
  }

  public void setRoadToHouse(String roadToHouse) {
    this.roadToHouse = roadToHouse;
  }

  public Boolean isToiletChanged() {
    return toiletChanged;
  }

  public void setToiletChanged(Boolean toiletChanged) {
    this.toiletChanged = toiletChanged;
  }

  public Boolean isHasTapWater() {
    return hasTapWater;
  }

  public void setHasTapWater(Boolean hasTapWater) {
    this.hasTapWater = hasTapWater;
  }

  public Float getCultivateArea() {
    return cultivateArea;
  }

  public void setCultivateArea(Float cultivateArea) {
    this.cultivateArea = cultivateArea;
  }

  public Boolean isLandTransfer() {
    return landTransfer;
  }

  public void setLandTransfer(Boolean landTransfer) {
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

  @Override
  public String toString() {
    return "People{" +
            "id=" + id +
            ", fatherId='" + fatherId + '\'' +
            ", ownId='" + ownId + '\'' +
            ", memberCount=" + memberCount +
            ", liveAddress='" + liveAddress + '\'' +
            ", homeAddress='" + homeAddress + '\'' +
            ", homeName='" + homeName + '\'' +
            ", liveType='" + liveType + '\'' +
            ", isAgriculture='" + isAgriculture + '\'' +
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
            ", houseType='" + houseType + '\'' +
            ", houseFrom='" + houseFrom + '\'' +
            ", houseOwnerName='" + houseOwnerName + '\'' +
            ", houseOwnerPhone='" + houseOwnerPhone + '\'' +
            ", houseOwnerIdCard='" + houseOwnerIdCard + '\'' +
            ", name='" + name + '\'' +
            ", relationship='" + relationship + '\'' +
            ", sex='" + sex + '\'' +
            ", age=" + age +
            ", ethnic='" + ethnic + '\'' +
            ", maritalStatus='" + maritalStatus + '\'' +
            ", politicalStatus='" + politicalStatus + '\'' +
            ", education='" + education + '\'' +
            ", studyStatus='" + studyStatus + '\'' +
            ", militaryService='" + militaryService + '\'' +
            ", career='" + career + '\'' +
            ", workAddress='" + workAddress + '\'' +
            ", idCard='" + idCard + '\'' +
            ", phone='" + phone + '\'' +
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
            ", keyAssistantWAL=" + keyAssistantWAL +
            ", hasCovidVaccine=" + hasCovidVaccine +
            ", hasMedicalInsurance=" + hasMedicalInsurance +
            ", hasPension=" + hasPension +
            ", houseStructure='" + houseStructure + '\'' +
            ", houseArea=" + houseArea +
            ", roadToHouse='" + roadToHouse + '\'' +
            ", toiletChanged=" + toiletChanged +
            ", hasTapWater=" + hasTapWater +
            ", cultivateArea=" + cultivateArea +
            ", landTransfer=" + landTransfer +
            ", primaryIncome='" + primaryIncome + '\'' +
            ", other='" + other + '\'' +
            ", village='" + village + '\'' +
            '}';
  }
}
