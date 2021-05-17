import {Before,After} from "cucumber";
import {browser} from "protractor";

Before({tags: " @CalculatorTest"}, function () {
    browser.manage().window().maximize();
});

After({tags: " @CalculatorTest"}, function () {
    console.log("testing calc done");
});

Before({tags: "@AngularTest"}, function () {
    console.log("to do angular testing");
});

/*
After(async function(scenario) {

    if(scenario.result.status==status.FAILED){
        const screenshot=await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
});


 */