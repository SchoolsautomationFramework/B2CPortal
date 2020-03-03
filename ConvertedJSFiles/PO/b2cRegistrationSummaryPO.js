"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cRegistrationSummaryPO = /** @class */ (function () {
    function b2cRegistrationSummaryPO() {
    }
    b2cRegistrationSummaryPO.registrationSummaryReport = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary']"));
    b2cRegistrationSummaryPO.sessionSelection = protractor_1.element(protractor_1.by.css("#qualificationLevel"));
    b2cRegistrationSummaryPO.printFullReport = protractor_1.element(protractor_1.by.xpath("//button[@id='download-full-report-button']"));
    return b2cRegistrationSummaryPO;
}());
exports.b2cRegistrationSummaryPO = b2cRegistrationSummaryPO;
