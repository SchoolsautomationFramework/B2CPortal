import { element ,by} from "protractor";
import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
export class b2cPaymentB2CPortalPO
{
    public static payOnline=element(by.css("body > div > div > div > form > div > div.row > div:nth-child(2) > div > div > div.panel-body > p:nth-child(1) > label > input"))
    public static payOffline=element(by.css("#pay-another-way-radio"))
    public static paymentContnueBtn=element(by.xpath("//button[@id='continue-payment-button']"))
    public static cardtype = element(by.xpath("//img[@alt='Visa']"))
    public static terms = element(by.css("#customer-info > div.form-bottom > div > div > div:nth-child(1) > div:nth-child(2) > label > input[type=checkbox]"))
    public static pay = element(by.css("#customer-info > div.form-bottom > div > div > div:nth-child(2) > div:nth-child(5) > div > input"))
    public static cardnumber = element(by.name("pan"))
    public static cvv = element(by.name("cvv2"))
    public static card_holder_name = element(by.name("fio"))
    public static month = element(by.css("#sections > div > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(8) > td:nth-child(1) > select"))
    public static year = element(by.css("#ExpYear"))
    public static submit = element(by.css("#sections > div > table > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(9) > td:nth-child(1) > form > input[type=submit]:nth-child(5)"))
    public static userName=element(by.css("#uform > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(3) > td > table > tbody > tr > td > div > table.table-field-input > tbody > tr > td > div"))
    public static nextbtn=element(by.css("#uform > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(5) > td > table > tbody > tr > td:nth-child(1) > input"))
    public static pwd=element(by.css("body > div > div > form > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > div.table-right-column > table.table-field-input > tbody > tr > td > div > input"))
    public static signin=element(by.css("body > div > div > form > table.m_tbl > tbody > tr > td > table.table-upper > tbody > tr:nth-child(3) > td > input"))
}