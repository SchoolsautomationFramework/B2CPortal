"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cSearchForExamsPO_1 = require("../PO/b2cSearchForExamsPO");
var protractor_1 = require("protractor");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2cSearchExamLib = /** @class */ (function () {
    function b2cSearchExamLib() {
    }
    b2cSearchExamLib.prototype.searchSubject = function () {
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cAwardingBody = new selectUtil_1.selectUtil(b2cSearchForExamsPO_1.b2cSearchForExamsPO.awardingBody);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cAwardingBody.selectByIndex(3);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cSession = new selectUtil_1.selectUtil(b2cSearchForExamsPO_1.b2cSearchForExamsPO.session);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cSession.selectByIndex(3);
        //waitStatementUtil.customWait1()
        protractor_1.browser.sleep(1000);
        var Selb2cQualificationLevel = new selectUtil_1.selectUtil(b2cSearchForExamsPO_1.b2cSearchForExamsPO.qualificationLevel);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cQualificationLevel.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2cLocation = new selectUtil_1.selectUtil(b2cSearchForExamsPO_1.b2cSearchForExamsPO.location);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cLocation.selectByIndex(3);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.subjectList.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.subjectList.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.subjectSelection.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.searchSubjectBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.addToBasketBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cSearchForExamsPO_1.b2cSearchForExamsPO.proceedToBasket.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return b2cSearchExamLib;
}());
exports.b2cSearchExamLib = b2cSearchExamLib;
