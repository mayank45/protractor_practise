describe('Test suite',function () {
    it('open browser', function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        console.log("before");
        browser.switchTo().frame("courses-iframe");
        console.log("aftre");
        element(by.linkText("Login")).click();

    });

})