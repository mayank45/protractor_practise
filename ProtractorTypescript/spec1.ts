import {browser, by, element} from "protractor";

describe('test suite', ()=>{

    it('open browser',async ()=>{
      await  browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("2").then(function (){
            browser.sleep(5000);
        })
    })
})