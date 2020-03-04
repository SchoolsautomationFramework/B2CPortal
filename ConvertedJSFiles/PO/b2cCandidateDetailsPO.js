"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cCandidateDetailsPO = /** @class */ (function () {
    function b2cCandidateDetailsPO() {
    }
    b2cCandidateDetailsPO.titledrpdwn = protractor_1.element(protractor_1.by.css("#title-select > a"));
    b2cCandidateDetailsPO.titleSelect = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Dr')]"));
    b2cCandidateDetailsPO.firstName = protractor_1.element(protractor_1.by.css("#first-name-input"));
    b2cCandidateDetailsPO.lastName = protractor_1.element(protractor_1.by.css("#last-name-input"));
    b2cCandidateDetailsPO.gender = protractor_1.element(protractor_1.by.css("#gender-male-button"));
    b2cCandidateDetailsPO.englishNativeLanguage = protractor_1.element(protractor_1.by.css("#nativeLanguage"));
    b2cCandidateDetailsPO.englishNativeLanguageSlctn = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Yes')]"));
    b2cCandidateDetailsPO.address = protractor_1.element(protractor_1.by.css("#address1-input"));
    b2cCandidateDetailsPO.city = protractor_1.element(protractor_1.by.css("#city-input"));
    b2cCandidateDetailsPO.countrydrpdwn = protractor_1.element(protractor_1.by.xpath("//div[@id='country-select']//a[@placeholder='Please Select']"));
    b2cCandidateDetailsPO.countrySelection = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Afghanistan')]"));
    b2cCandidateDetailsPO.nextbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='next-button']"));
    b2cCandidateDetailsPO.idDrpdwn = protractor_1.element(protractor_1.by.css("#id-document-select > a"));
    b2cCandidateDetailsPO.idDocSlcn = protractor_1.element(protractor_1.by.xpath("//div[@class='ng-binding ng-scope']"));
    b2cCandidateDetailsPO.idNum = protractor_1.element(protractor_1.by.css("#id-number-input"));
    b2cCandidateDetailsPO.idDay = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Day']"));
    b2cCandidateDetailsPO.idMonthDrpdwn = protractor_1.element(protractor_1.by.xpath("//select[@placeholder='Month']"));
    b2cCandidateDetailsPO.idYear = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Year']"));
    b2cCandidateDetailsPO.idAuthority = protractor_1.element(protractor_1.by.css("#id-authority-input"));
    b2cCandidateDetailsPO.idnextbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='next-button']"));
    b2cCandidateDetailsPO.tcCheckbox = protractor_1.element(protractor_1.by.xpath("//input[@id='read-tc-checkbox']"));
    b2cCandidateDetailsPO.acceptTCbtn = protractor_1.element(protractor_1.by.xpath("//button[@id='accept-tc-button']"));
    return b2cCandidateDetailsPO;
}());
exports.b2cCandidateDetailsPO = b2cCandidateDetailsPO;
