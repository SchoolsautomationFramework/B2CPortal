"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cExamBasketPO = /** @class */ (function () {
    function b2cExamBasketPO() {
    }
    b2cExamBasketPO.registerAndPayNowBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='register-button']"));
    return b2cExamBasketPO;
}());
exports.b2cExamBasketPO = b2cExamBasketPO;
