"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cCancelRegistrationPO_1 = require("../PO/b2cCancelRegistrationPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var selectUtil_1 = require("../Util/selectUtil");
var b2cCancelRegistrationLib = /** @class */ (function () {
    function b2cCancelRegistrationLib() {
    }
    b2cCancelRegistrationLib.prototype.cancelRegistration = function () {
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.myRegistrationsTab.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.registrationsTab.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.cancelBtn.click();
        var Selb2cCancelRegis = new selectUtil_1.selectUtil(b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.cancellationReasonDrpDwn);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        Selb2cCancelRegis.selectByIndex(2);
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.saveBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2cCancelRegistrationPO_1.b2cCancelRegistrationPO.homeBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return b2cCancelRegistrationLib;
}());
exports.b2cCancelRegistrationLib = b2cCancelRegistrationLib;
