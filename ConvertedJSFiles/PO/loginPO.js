"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginPO = /** @class */ (function () {
    function loginPO() {
    }
    loginPO.loginEmail = protractor_1.element(protractor_1.by.css("#email-input"));
    loginPO.loginPassword = protractor_1.element(protractor_1.by.css("#password-input"));
    loginPO.loginButton = protractor_1.element(protractor_1.by.xpath("//input[@id='login-button']"));
    return loginPO;
}());
exports.loginPO = loginPO;
