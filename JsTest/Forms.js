describe('Test suite',function () {
    it('form validation', function () {

        browser.get('https://qaclickacademy.github.io/protocommerce/');
        element(by.name("name")).sendKeys("mayank");
        element(by.css("input[name='email']")).sendKeys("mayank@gmail.com");
        element(by.id("exampleInputPassword1")).sendKeys("mayank");
        element(by.css("input[type='checkbox']")).click();
        element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female")).click();
        element.all(by.name("inlineRadioOptions")).first().click();
        element(by.buttonText("Submit")).click().then(function (){
            element(by.css("div[class*='success'")).getText().then(function (text){
                console.log(text);
            })
        })

        element(by.name("name")).clear();
        element(by.name("name")).sendKeys("m").then(function (){
            element(by.css("div[class='alert alert-danger']")).getText().then(function (text){
                console.log(text);
            })
        })


    });

})