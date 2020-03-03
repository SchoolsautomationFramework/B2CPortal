import {b2cSearchForExamsPO} from "../PO/b2cSearchForExamsPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{browser, element, Key} from "protractor"
import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2cSearchExamLib
{
    public  searchSubject()
    {
        waitStatementUtil.customWait1()
        let Selb2cAwardingBody:selectUtil = new selectUtil(b2cSearchForExamsPO.awardingBody);
        waitStatementUtil.customWait1()
        Selb2cAwardingBody.selectByIndex(3)
        waitStatementUtil.customWait1()
        let Selb2cSession:selectUtil = new selectUtil(b2cSearchForExamsPO.session);
        waitStatementUtil.customWait1()
        Selb2cSession.selectByIndex(3)
        //waitStatementUtil.customWait1()
        browser.sleep(1000)
        let Selb2cQualificationLevel:selectUtil = new selectUtil(b2cSearchForExamsPO.qualificationLevel);
        waitStatementUtil.customWait1()
        Selb2cQualificationLevel.selectByIndex(2)
        waitStatementUtil.customWait1()
        let Selb2cLocation:selectUtil = new selectUtil(b2cSearchForExamsPO.location);
        waitStatementUtil.customWait1()
        Selb2cLocation.selectByIndex(3)
        waitStatementUtil.customWait1()
        b2cSearchForExamsPO.subjectList.click()
        waitStatementUtil.customWait1()
      
        b2cSearchForExamsPO.subjectList.click()
        waitStatementUtil.customWait1()
        b2cSearchForExamsPO.subjectSelection.click()
      
        waitStatementUtil.customWait1()
        b2cSearchForExamsPO.searchSubjectBtn.click()
        waitStatementUtil.customWait1()
        b2cSearchForExamsPO.addToBasketBtn.click()
        waitStatementUtil.customWait1()
        b2cSearchForExamsPO.proceedToBasket.click()
        waitStatementUtil.customWait1()


    }
}