import { RandomStringGeneratorUtil } from "../Util/RandomStringGeneratorUtil";
import {loginPO}from "../PO/loginPO";
import { browser } from "protractor";

export class loginLib
{
    public userLogin()
    {
        loginPO.loginEmail.sendKeys("qab2c@test.com");
        loginPO.loginPassword.sendKeys("Password1");
        loginPO.loginButton.click();
      
        

    }
}