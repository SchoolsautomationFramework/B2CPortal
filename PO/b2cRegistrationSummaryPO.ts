import { element ,by} from "protractor";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2cRegistrationSummaryPO
{
    public static registrationSummaryReport=element(by.xpath("//button[@class='btn btn-primary']"))
    public static sessionSelection=element(by.css("#qualificationLevel"))
    public static printFullReport=element(by.xpath("//button[@id='download-full-report-button']"))
}