"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cDashboardPO = /** @class */ (function () {
    function b2cDashboardPO() {
    }
    b2cDashboardPO.changeDateTextbox = protractor_1.element(protractor_1.by.css("#current-system-date"));
    b2cDashboardPO.changeDateButton = protractor_1.element(protractor_1.by.css("#current-system-date-button"));
    b2cDashboardPO.countryList = protractor_1.element(protractor_1.by.xpath("//span[@class='select2-arrow ui-select-toggle']//b"));
    b2cDashboardPO.selectCountry = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Pakistan')]"));
    //public static selectCountry=element(by.xpath("//div[contains(text(),'Bangladesh')]"))
    b2cDashboardPO.continueTab = protractor_1.element(protractor_1.by.css("#continue-select-country"));
    return b2cDashboardPO;
}());
exports.b2cDashboardPO = b2cDashboardPO;
