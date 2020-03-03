import {b2cExamBasketPO} from "../PO/b2cExamBasketPO"
import {b2cCandidateDetailsPO} from "../PO/b2cCandidateDetailsPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2cExamBasketLib
{
    public registerAndPayNow()
    {
        b2cExamBasketPO.registerAndPayNowBtn.click()
        waitStatementUtil.customWait1()
    }
  
        //b2cCandidateDetailsPO.payOnline.click()
    //     waitStatementUtil.customWait1()
    //     b2cCandidateDetailsPO.paymentContnueBtn.click()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()
    //     waitStatementUtil.customWait2()

    // 
}