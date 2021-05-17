describe('Test suite',function () {
    it('open browser', function () {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.rahulshettyacademy.com/AutomationPractice/');
        element(by.id("confirmbtn")).click();
        browser.switchTo().alert().accept().then(function (){
            browser.sleep(3000);
        });

    });

})