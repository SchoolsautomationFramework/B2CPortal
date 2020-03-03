import {b2cRegistrationSummaryPO} from "../PO/b2cRegistrationSummaryPO"

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";

export class b2cRegistrationSummaryLib

{
public downloadRegistrationSummary()
{
    waitStatementUtil.customWait1()
    b2cRegistrationSummaryPO.registrationSummaryReport.click()
    waitStatementUtil.customWait1()
    let Selb2csessionSelection:selectUtil = new selectUtil(b2cRegistrationSummaryPO.sessionSelection);
    waitStatementUtil.customWait1()
    Selb2csessionSelection.selectByIndex(2)
    waitStatementUtil.customWait1()
    b2cRegistrationSummaryPO.printFullReport.click()

    waitStatementUtil.customWait2()

    }
}