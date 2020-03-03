"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cRegistrationSummaryPO_1 = require("../PO/b2cRegistrationSummaryPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2cRegistrationSummaryLib = /** @class */ (function () {
    function b2cRegistrationSummaryLib() {
    }
    b2cRegistrationSummaryLib.prototype.downloadRegistrationSummary = function () {
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cRegistrationSummaryPO_1.b2cRegistrationSummaryPO.registrationSummaryReport.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        var Selb2csessionSelection = new selectUtil_1.selectUtil(b2cRegistrationSummaryPO_1.b2cRegistrationSummaryPO.sessionSelection);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2csessionSelection.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cRegistrationSummaryPO_1.b2cRegistrationSummaryPO.printFullReport.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return b2cRegistrationSummaryLib;
}());
exports.b2cRegistrationSummaryLib = b2cRegistrationSummaryLib;
