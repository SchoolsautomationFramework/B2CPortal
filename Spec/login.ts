import{browser} from "protractor"
import 'jasmine'

import {loginLib}from "../Lib/loginLib";

import {b2cSearchExamLib}from"../Lib/b2cSearchExamLib"
import{b2cDashboardLib} from "../Lib/b2cDashboardLib"

import{b2cExamBasketLib} from "../Lib/b2cExamBasketLib"

import { waitStatementUtil } from "../Util/waitStatementUtil";
import { preConditionUtil } from "../Util/preConditionUtil";
import { element ,by} from "protractor";
import { b2cCandidateDetailsLib } from "../Lib/b2cCandidateDetailsLib";
import { b2cPaymentB2CPortalLib } from "../Lib/b2cPaymentB2CPortalLib";
import { b2cCancelRegistrationLib } from "../Lib/b2cCancelRegistrationLib";
import { b2cRegistrationSummaryLib } from "../Lib/b2cRegistrationSummaryLib";
describe("User will login to b2c portal", function()
{
    let Loginlib = new loginLib()
    
    preConditionUtil.setSyncTimeoutConfig()
   
    waitStatementUtil.implicitWait()
    it("User login", function()
    {
//browser.get("https://qa-schoolexams-uat.britishcouncil.org/#/login/")
browser.get("https://lima-schoolexams-dev.dev.britishcouncil.org/#/login/")
  Loginlib.userLogin()
  waitStatementUtil.customWait2()

  waitStatementUtil.implicitWait()

  
    }
    )
    
  }
  )

  

  describe("User will select  date and country", function()
  {
      let b2CDashboardLib = new b2cDashboardLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("session, date and country selection", function()
      {
        b2CDashboardLib.setDate()
      b2CDashboardLib.selectCountry()
          waitStatementUtil.implicitWait()
      }
      )
      
    }
    )

    describe("User will search Subject",function()
    {
      let B2CserchExamLib=new b2cSearchExamLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("session, awardingbody, subject selection", function()
      {
        B2CserchExamLib.searchSubject()
          waitStatementUtil.implicitWait()
      }
      )
    }
    )
    describe("User add subject to basket",function()
    {
      let b2CExamBasketLib=new b2cExamBasketLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("session, awardingbody, subject selection", function()
      {
        b2CExamBasketLib.registerAndPayNow()
          waitStatementUtil.implicitWait()
         // b2CExamBasketLib.candidateDetails()
          waitStatementUtil.implicitWait()
      }
      )
    }
    )
    describe("User completes registration",function()
    {
      let b2CCandidateDetailsLib=new b2cCandidateDetailsLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("candidate Details", function()
      {
        b2CCandidateDetailsLib.candidateDetails()
          waitStatementUtil.implicitWait()

      }
      )
    }
     )
    // describe("User pays online",function()
    // {
    //   let b2CPaymentB2CPortalLib=new b2cPaymentB2CPortalLib()
    //   preConditionUtil.setSyncTimeoutConfig()
    //   waitStatementUtil.implicitWait()
    //   it("candidate Details", function()
    //   {
    //     b2CPaymentB2CPortalLib.b2cRegistrationOnlinePayment()
    //       waitStatementUtil.implicitWait()

    //   }
    //   )
    // }
    //  )
    describe("User pays offline",function()
    {
      let b2CPaymentB2CPortalLib=new b2cPaymentB2CPortalLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("candidate Details", function()
      {
        b2CPaymentB2CPortalLib.b2cRegistrationOfflinePayment()
          waitStatementUtil.implicitWait()

      }
      )
    }
    )
    describe("User downloads RegistrationSummary",function()
    {
      let b2CRegistrationSummaryLib=new b2cRegistrationSummaryLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("User downloads RegistrationSummary", function()
      {
        b2CRegistrationSummaryLib.downloadRegistrationSummary()
          waitStatementUtil.implicitWait()

      }
      )
    }
    )
    describe("User cancels Registration",function()
    {
      let b2CCancelRegistrationLib=new b2cCancelRegistrationLib()
      preConditionUtil.setSyncTimeoutConfig()
      waitStatementUtil.implicitWait()
      it("candidate Details", function()
      {
        b2CCancelRegistrationLib.cancelRegistration()
          waitStatementUtil.implicitWait()

      }
      )
    }
    )
