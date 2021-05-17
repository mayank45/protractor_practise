describe('test suite', function () {

    function calc(a,b,operator){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element.all(by.tagName("option")).each(function (item){
            item.getAttribute("value").then(function (value){
                if(value == operator){
                    item.click();
                }
            })

        })
        element(by.id("gobutton")).click();

    }

    it('chain locators',function (){
        browser.get('http://juliemr.github.io/protractor-demo/');

        calc(3,5,"ADDITION");
        calc(2,6,"MULTIPLICATION");
        calc(9,11,"SUBTRACTION");

        element.all(by.repeater("result in memory")).count().then(function (value){
            console.log(value);
        })

        element.all(by.repeater("result in memory")).each(function (item){
            item.element(by.css("td:nth-child(3)")).getText().then(function (value){
                console.log(value)
            })
        })

    })
});