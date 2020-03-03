import { element ,by} from "protractor";

import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import{b2cDashboardLib} from "../Lib/b2cDashboardLib"
export class b2cDashboardPO
{
public static changeDateTextbox = element(by.css("#current-system-date"))
public static changeDateButton=element(by.css("#current-system-date-button"))
public static countryList= element(by.xpath("//span[@class='select2-arrow ui-select-toggle']//b"))
public static selectCountry=element(by.xpath("//div[contains(text(),'Pakistan')]"))
//public static selectCountry=element(by.xpath("//div[contains(text(),'Bangladesh')]"))
public static continueTab=element(by.css("#continue-select-country"))
}