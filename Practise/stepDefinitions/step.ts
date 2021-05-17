import {Given,When,Then} from "@cucumber/cucumber";
import {browser} from "protractor";
import {WebsiteTesting} from "../PageObjects/WebsiteTesting";

let web=new WebsiteTesting();

Given('will navigate to cowin website', async ()=> {
    browser.waitForAngularEnabled(false);
  await browser.get('https://www.cowin.gov.in/home');
});

When('will enter {string} as pincode', async (string)=> {
    await web.inputCode.sendKeys(string);
    await web.search.click();

});


Then('will receive output', async ()=> {
    browser.sleep(10000);
    console.log("helo");

});
