import {b2cCancelRegistrationPO} from "../PO/b2cCancelRegistrationPO"

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2cCancelRegistrationLib
{
    public cancelRegistration()
    {
        waitStatementUtil.customWait2()
        b2cCancelRegistrationPO.myRegistrationsTab.click()
        waitStatementUtil.customWait1()
        b2cCancelRegistrationPO.registrationsTab.click()
        waitStatementUtil.customWait1()
        b2cCancelRegistrationPO.cancelBtn.click()
        let Selb2cCancelRegis:selectUtil = new selectUtil(b2cCancelRegistrationPO.cancellationReasonDrpDwn);
        waitStatementUtil.customWait1()
        Selb2cCancelRegis.selectByIndex(2)
        waitStatementUtil.customWait1()
        b2cCancelRegistrationPO.saveBtn.click()
        waitStatementUtil.customWait2()
        b2cCancelRegistrationPO.homeBtn.click()
        waitStatementUtil.customWait2()
    }
}
