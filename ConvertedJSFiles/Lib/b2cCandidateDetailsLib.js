"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cCandidateDetailsPO_1 = require("../PO/b2cCandidateDetailsPO");
var RandomStringGeneratorUtil_1 = require("../Util/RandomStringGeneratorUtil");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2cCandidateDetailsLib = /** @class */ (function () {
    function b2cCandidateDetailsLib() {
    }
    b2cCandidateDetailsLib.prototype.candidateDetails = function () {
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.titledrpdwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.titleSelect.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.gender.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        // let Selb2cEngNativeLang:selectUtil = new selectUtil(b2cCandidateDetailsPO.englishNativeLanguage);
        // waitStatementUtil.customWait1()
        // Selb2cEngNativeLang.selectByIndex(2)
        // waitStatementUtil.customWait1()
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.englishNativeLanguage.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        // b2cCandidateDetailsPO.englishNativeLanguageSlctn.click()
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.address.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.address.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.city.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.city.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.countrydrpdwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.countrySelection.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.nextbtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idDrpdwn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idDocSlcn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idNum.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idNum.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idDay.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idDay.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(1, 28));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cIdMonth = new selectUtil_1.selectUtil(b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idMonthDrpdwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cIdMonth.selectByIndex(3);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idYear.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idYear.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.dateOfBirth(2030, 2040));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idAuthority.clear();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idAuthority.sendKeys(RandomStringGeneratorUtil_1.RandomStringGeneratorUtil.getRandomString(5));
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.idnextbtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.tcCheckbox.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCandidateDetailsPO_1.b2cCandidateDetailsPO.acceptTCbtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return b2cCandidateDetailsLib;
}());
exports.b2cCandidateDetailsLib = b2cCandidateDetailsLib;
