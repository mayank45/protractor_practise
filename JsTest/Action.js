describe('test suite',function (){
    it('action test',function (){
        browser.get("https://angular.io/");

        element(by.linkText("Blog")).click();
        browser.sleep(5000);

        var winHandles=browser.getAllWindowHandles();
        winHandles.then(function(handles)
        {
            var parentWindow=handles[0];
            var popUpWindow=handles[1];
           console.log(parentWindow);
           console.log(popUpWindow);
        })

/*
        browser.getAllWindowHandles().then(function (handles){

            console.log("Page title before Switching : "+ browser.getTitle());
            console.log("Total Windows : "+handles.length);
           console.log("handle 1"+handles[1]);
            browser.switchTo().window(handles[1]);

            browser.getTitle().then(function (title){
                console.log(title+" after switching");
            });

            browser.switchTo().window(handles[0]);
            browser.getTitle().then(function (title){
                console.log(title+" again switching to main");
            });
        })

 */
    })
})