"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cPaymentB2CPortalPO = /** @class */ (function () {
    function b2cPaymentB2CPortalPO() {
    }
    b2cPaymentB2CPortalPO.payOnline = protractor_1.element(protractor_1.by.css("body > div > div > div > form > div > div.row > div:nth-child(2) > div > div > div.panel-body > p:nth-child(1) > label > input"));
    b2cPaymentB2CPortalPO.payOffline = protractor_1.element(protractor_1.by.css("#pay-another-way-radio"));
    b2cPaymentB2CPortalPO.paymentContnueBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='continue-payment-button']"));
    b2cPaymentB2CPortalPO.cardtype = protractor_1.element(protractor_1.by.xpath("//img[@alt='Visa']"));
    b2cPaymentB2CPortalPO.terms = protractor_1.element(protractor_1.by.css("#customer-info > div.form-bottom > div > div > div:nth-child(1) > div:nth-child(2) > label > input[type=checkbox]"));
    b2cPaymentB2CPortalPO.pay = protractor_1.element(protractor_1.by.css("#customer-info > div.form-bottom > div > div > div:nth-child(2) > div:nth-child(5) > div > input"));
    b2cPaymentB2CPortalPO.cardnumber = protractor_1.element(protractor_1.by.name("pan"));
    b2cPaymentB2CPortalPO.cvv = protractor_1.element(protractor_1.by.name("cvv2"));
    b2cPaymentB2CPortalPO.card_holder_name = protractor_1.element(protractor_1.by.name("fio"));
    b2cPaymentB2CPortalPO.month = protractor_1.element(protractor_1.by.css("#sections > div > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(8) > td:nth-child(1) > select"));
    b2cPaymentB2CPortalPO.year = protractor_1.element(protractor_1.by.css("#ExpYear"));
    b2cPaymentB2CPortalPO.submit = protractor_1.element(protractor_1.by.css("#sections > div > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(9) > td:nth-child(1) > form > input[type=submit]:nth-child(5)"));
    b2cPaymentB2CPortalPO.userName = protractor_1.element(protractor_1.by.css("#uform > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div > table.table-field-input > tbody > tr > td > div"));
    b2cPaymentB2CPortalPO.nextbtn = protractor_1.element(protractor_1.by.css("#uform > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(1) > input"));
    b2cPaymentB2CPortalPO.pwd = protractor_1.element(protractor_1.by.css("body > div > div > form > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > div.table-right-column > table.table-field-input > tbody > tr > td > div > input"));
    b2cPaymentB2CPortalPO.signin = protractor_1.element(protractor_1.by.css("body > div > div > form > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(3) > td > input"));
    return b2cPaymentB2CPortalPO;
}());
exports.b2cPaymentB2CPortalPO = b2cPaymentB2CPortalPO;
