"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cSearchForExamsPO = /** @class */ (function () {
    function b2cSearchForExamsPO() {
    }
    b2cSearchForExamsPO.awardingBody = protractor_1.element(protractor_1.by.css("#awardingBody"));
    b2cSearchForExamsPO.session = protractor_1.element(protractor_1.by.css("#session"));
    b2cSearchForExamsPO.qualificationLevel = protractor_1.element(protractor_1.by.css("#qualificationLevel"));
    b2cSearchForExamsPO.location = protractor_1.element(protractor_1.by.css("#location"));
    b2cSearchForExamsPO.subjectList = protractor_1.element(protractor_1.by.xpath("//input[@placeholder='Select from available subjects...']"));
    b2cSearchForExamsPO.subjectSelection = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'9706 ACCOUNTING')]"));
    b2cSearchForExamsPO.searchSubjectBtn = protractor_1.element(protractor_1.by.xpath("//button[@id='search-button']"));
    b2cSearchForExamsPO.addToBasketBtn = protractor_1.element(protractor_1.by.xpath("//body[@class='ng-scope']//div[@class='ng-scope']//div[@class='ng-scope']//div[2]//div[1]//div[2]//div[3]//div[1]//button[1]"));
    b2cSearchForExamsPO.proceedToBasket = protractor_1.element(protractor_1.by.xpath("//button[@id='proceed-to-basket']"));
    return b2cSearchForExamsPO;
}());
exports.b2cSearchForExamsPO = b2cSearchForExamsPO;
