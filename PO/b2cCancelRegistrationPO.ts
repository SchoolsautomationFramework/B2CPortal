import { element ,by} from "protractor";
export class b2cCancelRegistrationPO
{
    public static myRegistrationsTab=element(by.css("#my-registration-button"))
    public static registrationsTab=element(by.css("#registrations-tab-button"))
    public static cancelBtn=element(by.xpath("//button[@class='btn btn-danger ng-scope']"))
    public static cancellationReasonDrpDwn=element(by.css("#cancelationReason"))
    public static saveBtn=element(by.xpath("//button[@class='btn btn-primary ng-scope']"))
    public static homeBtn=element(by.css("body > div > header > div > nav > ul.nav.navbar-nav.bc-main-nav > li:nth-child(1) > a"))
}