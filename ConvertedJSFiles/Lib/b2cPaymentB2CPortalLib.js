"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cPaymentB2CPortalPO_1 = require("../PO/b2cPaymentB2CPortalPO");
var protractor_1 = require("protractor");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var b2cPaymentB2CPortalLib = /** @class */ (function () {
    function b2cPaymentB2CPortalLib() {
    }
    b2cPaymentB2CPortalLib.prototype.b2cRegistrationOnlinePayment = function () {
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.payOnline.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.paymentContnueBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.userName.sendKeys("saraswatijee.soni@britishcouncil.org");
        waitStatementUtil_1.waitStatementUtil.customWait2();
        //browser.wait(ExpectedConditions.urlContains(("sandbox")),50000);
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.cardtype.click();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.terms.click();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.pay.click();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.cardnumber.sendKeys("4142621111111112");
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.cvv.sendKeys("411");
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.card_holder_name.sendKeys("aman");
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.month.click();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.month.sendKeys("01");
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.year.sendKeys("2030");
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.submit.click();
        //browser.wait(ExpectedConditions.urlContains(("schoolexams")),50000);
        protractor_1.browser.sleep(8000);
    };
    b2cPaymentB2CPortalLib.prototype.b2cRegistrationOfflinePayment = function () {
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.payOffline.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
        b2cPaymentB2CPortalPO_1.b2cPaymentB2CPortalPO.paymentContnueBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait2();
    };
    return b2cPaymentB2CPortalLib;
}());
exports.b2cPaymentB2CPortalLib = b2cPaymentB2CPortalLib;
