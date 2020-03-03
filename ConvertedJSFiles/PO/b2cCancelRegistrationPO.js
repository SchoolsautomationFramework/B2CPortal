"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var b2cCancelRegistrationPO = /** @class */ (function () {
    function b2cCancelRegistrationPO() {
    }
    b2cCancelRegistrationPO.myRegistrationsTab = protractor_1.element(protractor_1.by.css("#my-registration-button"));
    b2cCancelRegistrationPO.registrationsTab = protractor_1.element(protractor_1.by.css("#registrations-tab-button"));
    b2cCancelRegistrationPO.cancelBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-danger ng-scope']"));
    b2cCancelRegistrationPO.cancellationReasonDrpDwn = protractor_1.element(protractor_1.by.css("#cancelationReason"));
    b2cCancelRegistrationPO.saveBtn = protractor_1.element(protractor_1.by.xpath("//button[@class='btn btn-primary ng-scope']"));
    b2cCancelRegistrationPO.homeBtn = protractor_1.element(protractor_1.by.css("body > div > header > div > nav > ul.nav.navbar-nav.bc-main-nav > li:nth-child(1) > a"));
    return b2cCancelRegistrationPO;
}());
exports.b2cCancelRegistrationPO = b2cCancelRegistrationPO;
