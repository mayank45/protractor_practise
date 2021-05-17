var using=require('jasmine-data-provider');
var obj=require("./PageObject");
var d=require("./data");

describe('Test suite',function (){

    beforeEach(function() {
        obj.getUrl();
    });

    using(d.data, function (dt, description) {

        it('open browser'+description,function (){
            obj.firstInput.sendKeys(dt.firstInput);
            obj.secondInput.sendKeys(dt.secondInput);
            obj.go.click();
            expect(obj.result.getText()).toBe(dt.result);

        })

    });



    afterEach(function() {
        console.log("after test")
    });
})