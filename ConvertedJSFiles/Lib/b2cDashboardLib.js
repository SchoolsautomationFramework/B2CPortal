"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cDashboardPO_1 = require("../PO/b2cDashboardPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var b2cDashboardLib = /** @class */ (function () {
    function b2cDashboardLib() {
    }
    b2cDashboardLib.prototype.setDate = function () {
        waitStatementUtil_1.waitStatementUtil.implicitWait();
        b2cDashboardPO_1.b2cDashboardPO.changeDateTextbox.clear();
        b2cDashboardPO_1.b2cDashboardPO.changeDateTextbox.sendKeys("07/07/2019");
        b2cDashboardPO_1.b2cDashboardPO.changeDateButton.click();
    };
    b2cDashboardLib.prototype.selectCountry = function () {
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cDashboardPO_1.b2cDashboardPO.countryList.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cDashboardPO_1.b2cDashboardPO.selectCountry.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cDashboardPO_1.b2cDashboardPO.continueTab.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return b2cDashboardLib;
}());
exports.b2cDashboardLib = b2cDashboardLib;
