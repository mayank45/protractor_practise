"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: " @CalculatorTest" }, function () {
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After({ tags: " @CalculatorTest" }, function () {
    console.log("testing calc done");
});
cucumber_1.Before({ tags: "@AngularTest" }, function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5hdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBc0M7QUFDdEMsMkNBQW1DO0FBRW5DLGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsRUFBRTtJQUMvQixvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBQyxFQUFFO0lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQUU7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUg7Ozs7Ozs7Ozs7R0FVRyJ9