import { element ,by} from "protractor";

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2cSearchForExamsPO
{
    public static awardingBody=element(by.css("#awardingBody"))
    public static session=element(by.css("#session"))
    public static qualificationLevel=element(by.css("#qualificationLevel"))
    public static location=element(by.css("#location"))
    public static subjectList= element(by.xpath("//input[@placeholder='Select from available subjects...']"))
    public static subjectSelection=element(by.xpath("//div[contains(text(),'9706 ACCOUNTING')]"))
    public static searchSubjectBtn= element(by.xpath("//button[@id='search-button']"))
    public static addToBasketBtn=element(by.xpath("//body[@class='ng-scope']//div[@class='ng-scope']//div[@class='ng-scope']//div[2]//div[1]//div[2]//div[3]//div[1]//button[1]"))
    public static proceedToBasket=element(by.xpath("//button[@id='proceed-to-basket']"))
}