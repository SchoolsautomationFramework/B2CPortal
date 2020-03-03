import { element ,by} from "protractor";
export class b2cCandidateDetailsPO
{

public static titledrpdwn=element(by.css("#title-select > a"))
public static titleSelect=element(by.xpath("//div[contains(text(),'Dr')]"))
public static firstName=element(by.css("#first-name-input"))
public static lastName=element(by.css("#last-name-input"))
public static gender=element(by.css("#gender-male-button"))
public static englishNativeLanguage=element(by.css("#nativeLanguage"))
public static address=element(by.css("#address1-input"))
public static city=element(by.css("#city-input"))
public static countrydrpdwn=element(by.xpath("//div[@id='country-select']//a[@placeholder='Please Select']"))
public static countrySelection=element(by.xpath("//div[contains(text(),'Afghanistan')]"))
public static nextbtn=element(by.xpath("//button[@id='next-button']"))
public static idDrpdwn=element(by.css("#id-document-select > a"))
public static idDocSlcn=element(by.xpath("//div[@class='ng-binding ng-scope']"))
public static idNum=element(by.css("#id-number-input"))
public static idDay=element(by.xpath("//input[@placeholder='Day']"))
public static idMonthDrpdwn=element(by.xpath("//select[@placeholder='Month']"))
public static idYear=element(by.xpath("//input[@placeholder='Year']"))
public static idAuthority=element(by.css("#id-authority-input"))
public static idnextbtn=element(by.xpath("//button[@id='next-button']"))
public static tcCheckbox=element(by.xpath("//input[@id='read-tc-checkbox']"))
public static acceptTCbtn=element(by.xpath("//button[@id='accept-tc-button']"))

}
