
import {b2cCandidateDetailsPO} from "../PO/b2cCandidateDetailsPO"
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";

import { waitStatementUtil } from "../Util/waitStatementUtil";
import { selectUtil} from "../Util/selectUtil";
export class b2cCandidateDetailsLib
{
    public candidateDetails()
    {
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.titledrpdwn.click()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.titleSelect.click()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.gender.click()
        waitStatementUtil.customWait1()
        let Selb2cEngNativeLang:selectUtil = new selectUtil(b2cCandidateDetailsPO.englishNativeLanguage);
        waitStatementUtil.customWait2()
        Selb2cEngNativeLang.selectByIndex(2)
        waitStatementUtil.customWait2()
        b2cCandidateDetailsPO.address.clear()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.address.sendKeys(RandomStringGeneratorUtil.getRandomString(5))
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.city.clear()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.city.sendKeys(RandomStringGeneratorUtil.getRandomString(5))
        waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.countrydrpdwn.click()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.countrySelection.click()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.nextbtn.click()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.idDrpdwn.click()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.idDocSlcn.click()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.idNum.clear()
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.idNum.sendKeys(RandomStringGeneratorUtil.getRandomString(5))
       waitStatementUtil.customWait1()
       b2cCandidateDetailsPO.idDay.clear()
       waitStatementUtil.customWait1()
       
       b2cCandidateDetailsPO.idDay.sendKeys(RandomStringGeneratorUtil.dateOfBirth(1,28))
       waitStatementUtil.customWait1()
        let Selb2cIdMonth:selectUtil = new selectUtil(b2cCandidateDetailsPO.idMonthDrpdwn);
        waitStatementUtil.customWait1()
        Selb2cIdMonth.selectByIndex(3)
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.idYear.clear()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.idYear.sendKeys(RandomStringGeneratorUtil.dateOfBirth(2030,2040))
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.idAuthority.clear()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.idAuthority.sendKeys(RandomStringGeneratorUtil.getRandomString(5))
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.idnextbtn.click()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.tcCheckbox.click()
        waitStatementUtil.customWait1()
        b2cCandidateDetailsPO.acceptTCbtn.click()
        waitStatementUtil.customWait2()
       
    }
}

