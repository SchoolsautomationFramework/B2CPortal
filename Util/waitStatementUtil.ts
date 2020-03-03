import { browser } from "protractor";


export class waitStatementUtil{
    public static implicitWait()
    {
        browser.manage().timeouts().implicitlyWait(30000)
    }
public static customWait1()
{
    browser.sleep(700)
}
public static customWait2()
{
    browser.sleep(7000)
}
public static customWait3()
{
    browser.sleep(56000)
}
}
