import {Given,When,Then} from "cucumber";
import {calculator} from "../PageObjects/calculator";
import {browser} from "protractor";
import {angularHome} from "../PageObjects/angularHome";
import chai from "chai";

let calc=new calculator();
let ang=new angularHome();
let expect = chai.expect;

Given('will navigate to website', async ()=> {
    await  browser.get('http://juliemr.github.io/protractor-demo/');

});

Given('will navigate to {string}', async (string)=> {
    if(string == "calc"){
        await  browser.get('http://juliemr.github.io/protractor-demo/');
    }
    if(string == "angular"){
        await browser.get("https://angularjs.org/");
    }
});



When('add two numbers {string} and {string}',  async (string, string2)=> {
    await calc.firstElement.sendKeys(string);
    await calc.secondElement.sendKeys(string2);

});

Then('output will be {string}', async (string)=> {
    await calc.go.click();
    await calc.result.getText().then(function (val){
        expect(val).to.equal(string);
    })
});

When('i click on the header link', async ()=> {
    await ang.angularLink.click();

});

When('Navigate to next page', async ()=> {
    await browser.sleep(3000);
});

Then('You will enter {string} in search box', async (string)=> {
    await ang.search.sendKeys("hello");
    await browser.sleep(3000);
});

