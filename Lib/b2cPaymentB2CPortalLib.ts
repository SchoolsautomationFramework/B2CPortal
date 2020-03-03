import {b2cPaymentB2CPortalPO} from "../PO/b2cPaymentB2CPortalPO"

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2cPaymentB2CPortalLib
{

public b2cRegistrationOnlinePayment()
{
    b2cPaymentB2CPortalPO.payOnline.click()
        waitStatementUtil.customWait1()
        b2cPaymentB2CPortalPO.paymentContnueBtn.click()
        waitStatementUtil.customWait2()
        b2cPaymentB2CPortalPO.userName.sendKeys("saraswatijee.soni@britishcouncil.org")
        waitStatementUtil.customWait2()
      
        //browser.wait(ExpectedConditions.urlContains(("sandbox")),50000);
        b2cPaymentB2CPortalPO.cardtype.click()
        b2cPaymentB2CPortalPO.terms.click()
        b2cPaymentB2CPortalPO.pay.click()
        b2cPaymentB2CPortalPO.cardnumber.sendKeys("4142621111111112")
        b2cPaymentB2CPortalPO.cvv.sendKeys("411")
        b2cPaymentB2CPortalPO.card_holder_name.sendKeys("aman")
        b2cPaymentB2CPortalPO.month.click()
        b2cPaymentB2CPortalPO.month.sendKeys("01")
        b2cPaymentB2CPortalPO.year.sendKeys("2030")
        b2cPaymentB2CPortalPO.submit.click()
        //browser.wait(ExpectedConditions.urlContains(("schoolexams")),50000);
        browser.sleep(8000)
    
}
public b2cRegistrationOfflinePayment()
{
    waitStatementUtil.customWait1() 
    b2cPaymentB2CPortalPO.payOffline.click()
    waitStatementUtil.customWait1()
    b2cPaymentB2CPortalPO.paymentContnueBtn.click()
    waitStatementUtil.customWait2()
}
}