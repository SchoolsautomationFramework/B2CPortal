"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loginPO_1 = require("../PO/loginPO");
var loginLib = /** @class */ (function () {
    function loginLib() {
    }
    loginLib.prototype.userLogin = function () {
        loginPO_1.loginPO.loginEmail.sendKeys("qab2c@test.com");
        loginPO_1.loginPO.loginPassword.sendKeys("Password1");
        loginPO_1.loginPO.loginButton.click();
    };
    return loginLib;
}());
exports.loginLib = loginLib;
