describe('test suite', function () {

    function add(a,b){
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();

    }

    it('chain locators',function (){
        browser.get('http://juliemr.github.io/protractor-demo/');

        add(3,5);
        add(2,6);
        add(9,11);

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