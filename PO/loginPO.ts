import { element ,by} from "protractor";

export class loginPO{
    public static loginEmail=element(by.css("#email-input"))
    public static loginPassword=element(by.css("#password-input"))
    public static loginButton=element(by.xpath("//input[@id='login-button']"))
}
