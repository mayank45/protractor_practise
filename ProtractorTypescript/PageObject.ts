import {browser, by, element} from "protractor";
import {calculator} from "./PageObjects/calculator";
import {angularHome} from "./PageObjects/angularHome";

describe('test suite',()=>{

    it('calc testing using page object',async ()=>{
        let calc=new calculator();
        await  browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstElement.sendKeys("3");
        await calc.secondElement.sendKeys("4");
        await calc.go.click();
        calc.result.getText().then(function (val){
            console.log(val);
        })
    })



   it('page object test',async ()=>{
       let ang=new angularHome();
        await browser.get("https://angularjs.org/");
        await ang.angularLink.click();
        await browser.sleep(3000);
        await ang.search.sendKeys("hello");

    })


})
