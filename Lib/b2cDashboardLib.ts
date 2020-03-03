import {b2cDashboardPO} from "../PO/b2cDashboardPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
export class b2cDashboardLib
{
    public setDate()
    {
       
        waitStatementUtil.implicitWait()
        b2cDashboardPO.changeDateTextbox.clear()
        b2cDashboardPO.changeDateTextbox.sendKeys("07/07/2019")
        b2cDashboardPO.changeDateButton.click()   
        
    }

    public selectCountry()
    {
        waitStatementUtil.customWait1()
        b2cDashboardPO.countryList.click()
     
        waitStatementUtil.customWait1()
        b2cDashboardPO.selectCountry.click()
   
        waitStatementUtil.customWait1()
        b2cDashboardPO.continueTab.click()
      
        waitStatementUtil.customWait1()
    }
}
