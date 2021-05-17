describe('Test suite',function (){

    function selectItem(selectedItem){
       element.all(by.tagName("app-card")).each(function (item){
           item.element(by.css("h4 a")).getText().then(function (text){
               if(text==selectedItem){
                   item.element(by.css("button[class='btn btn-info']")).click();
               }
           })
       })
    }

    it('open browser',async ()=>{

        browser.get('https://qaclickacademy.github.io/protocommerce/shop');
        selectItem("iphone X");
        selectItem("Samsung Note 8");
        element(by.partialLinkText("Checkout")).getText().then(function (text){
            console.log(text);
        })

        element(by.partialLinkText("Checkout")).click();
        browser.sleep(3000);
        var sum=0;

        var table=element(by.tagName("table"));
        var tbody=table.element(by.tagName("tbody"));
        tbody.all(by.tagName("tr")).each(function (item){
            item.element(by.tagName("td:nth-child(4)")).getText().then(function (text){
                var res=text.split(" ");
                var x=Number(res[1]);
                if(!isNaN(x)){
                    sum=sum+x;
                }


            })
})


        element(by.css("td[class='text-right']")).getText().then(function (text){
            console.log(text);
            console.log(sum);
        })


            })//it

        })//describe

