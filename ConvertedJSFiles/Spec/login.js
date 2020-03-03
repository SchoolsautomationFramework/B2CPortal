"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
require("jasmine");
var loginLib_1 = require("../Lib/loginLib");
var b2cSearchExamLib_1 = require("../Lib/b2cSearchExamLib");
var b2cDashboardLib_1 = require("../Lib/b2cDashboardLib");
var b2cExamBasketLib_1 = require("../Lib/b2cExamBasketLib");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var preConditionUtil_1 = require("../Util/preConditionUtil");
var b2cCandidateDetailsLib_1 = require("../Lib/b2cCandidateDetailsLib");
var b2cPaymentB2CPortalLib_1 = require("../Lib/b2cPaymentB2CPortalLib");
var b2cCancelRegistrationLib_1 = require("../Lib/b2cCancelRegistrationLib");
var b2cRegistrationSummaryLib_1 = require("../Lib/b2cRegistrationSummaryLib");
describe("User will login to b2c portal", function () {
    var Loginlib = new loginLib_1.loginLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("User login", function () {
        //browser.get("https://qa-schoolexams-uat.britishcouncil.org/#/login/")
        protractor_1.browser.get("https://lima-schoolexams-dev.dev.britishcouncil.org/#/login/");
        Loginlib.userLogin();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will select  date and country", function () {
    var b2CDashboardLib = new b2cDashboardLib_1.b2cDashboardLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, date and country selection", function () {
        b2CDashboardLib.setDate();
        b2CDashboardLib.selectCountry();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User will search Subject", function () {
    var B2CserchExamLib = new b2cSearchExamLib_1.b2cSearchExamLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, awardingbody, subject selection", function () {
        B2CserchExamLib.searchSubject();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User add subject to basket", function () {
    var b2CExamBasketLib = new b2cExamBasketLib_1.b2cExamBasketLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("session, awardingbody, subject selection", function () {
        b2CExamBasketLib.registerAndPayNow();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
        // b2CExamBasketLib.candidateDetails()
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User completes registration", function () {
    var b2CCandidateDetailsLib = new b2cCandidateDetailsLib_1.b2cCandidateDetailsLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("candidate Details", function () {
        b2CCandidateDetailsLib.candidateDetails();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
// describe("User pays online",function()
// {
//   let b2CPaymentB2CPortalLib=new b2cPaymentB2CPortalLib()
//   preConditionUtil.setSyncTimeoutConfig()
//   waitStatementUtil.implicitWait()
//   it("candidate Details", function()
//   {
//     b2CPaymentB2CPortalLib.b2cRegistrationOnlinePayment()
//       waitStatementUtil.implicitWait()
//   }
//   )
// }
//  )
describe("User pays offline", function () {
    var b2CPaymentB2CPortalLib = new b2cPaymentB2CPortalLib_1.b2cPaymentB2CPortalLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("candidate Details", function () {
        b2CPaymentB2CPortalLib.b2cRegistrationOfflinePayment();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User downloads RegistrationSummary", function () {
    var b2CRegistrationSummaryLib = new b2cRegistrationSummaryLib_1.b2cRegistrationSummaryLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("User downloads RegistrationSummary", function () {
        b2CRegistrationSummaryLib.downloadRegistrationSummary();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
describe("User cancels Registration", function () {
    var b2CCancelRegistrationLib = new b2cCancelRegistrationLib_1.b2cCancelRegistrationLib();
    preConditionUtil_1.preConditionUtil.setSyncTimeoutConfig();
    waitStatementUtil_1.waitStatementUtil.implicitWait();
    it("candidate Details", function () {
        b2CCancelRegistrationLib.cancelRegistration();
        waitStatementUtil_1.waitStatementUtil.implicitWait();
    });
});
