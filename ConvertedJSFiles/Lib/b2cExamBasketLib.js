"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b2cExamBasketPO_1 = require("../PO/b2cExamBasketPO");
var waitStatementUtil_1 = require("../Util/waitStatementUtil");
var b2cExamBasketLib = /** @class */ (function () {
    function b2cExamBasketLib() {
    }
    b2cExamBasketLib.prototype.registerAndPayNow = function () {
        b2cExamBasketPO_1.b2cExamBasketPO.registerAndPayNowBtn.click();
        waitStatementUtil_1.waitStatementUtil.customWait1();
    };
    return b2cExamBasketLib;
}());
exports.b2cExamBasketLib = b2cExamBasketLib;
