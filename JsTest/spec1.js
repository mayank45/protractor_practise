describe('Test suite',function (){
    it('open browser',function (){
       /* browser.get("https://angularjs.org");
        browser.get('http://juliemr.github.io/protractor-demo/').then(function (){
            console.log(browser.getTitle());
        })
        */
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        element(by.css("h2[class='ng-binding']")).getText().then(function (value){
            console.log(value)
        })

    })

    it('close browser',function (){

    })
})