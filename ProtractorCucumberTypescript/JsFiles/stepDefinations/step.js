"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../PageObjects/calculator");
const protractor_1 = require("protractor");
const angularHome_1 = require("../PageObjects/angularHome");
const chai_1 = __importDefault(require("chai"));
let calc = new calculator_1.calculator();
let ang = new angularHome_1.angularHome();
let expect = chai_1.default.expect;
cucumber_1.Given('will navigate to website', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
}));
cucumber_1.Given('will navigate to {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calc") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    if (string == "angular") {
        yield protractor_1.browser.get("https://angularjs.org/");
    }
}));
cucumber_1.When('add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.firstElement.sendKeys(string);
    yield calc.secondElement.sendKeys(string2);
}));
cucumber_1.Then('output will be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.result.getText().then(function (val) {
        expect(val).to.equal(string);
    });
}));
cucumber_1.When('i click on the header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.angularLink.click();
}));
cucumber_1.When('Navigate to next page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(3000);
}));
cucumber_1.Then('You will enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ang.search.sendKeys("hello");
    yield protractor_1.browser.sleep(3000);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlDO0FBQ3pDLDBEQUFxRDtBQUNyRCwyQ0FBbUM7QUFDbkMsNERBQXVEO0FBQ3ZELGdEQUF3QjtBQUV4QixJQUFJLElBQUksR0FBQyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztBQUMxQixJQUFJLEdBQUcsR0FBQyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLGdCQUFLLENBQUMsMEJBQTBCLEVBQUUsR0FBUSxFQUFFO0lBQ3hDLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztBQUVwRSxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZ0JBQUssQ0FBQywyQkFBMkIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQy9DLElBQUcsTUFBTSxJQUFJLE1BQU0sRUFBQztRQUNoQixNQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7S0FDbkU7SUFDRCxJQUFHLE1BQU0sSUFBSSxTQUFTLEVBQUM7UUFDbkIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0tBQy9DO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUlILGVBQUksQ0FBQyx1Q0FBdUMsRUFBRyxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNwRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzVDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztRQUMxQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsNEJBQTRCLEVBQUUsR0FBUSxFQUFFO0lBQ3pDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVsQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVCQUF1QixFQUFFLEdBQVEsRUFBRTtJQUNwQyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsdUNBQXVDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUMxRCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDOUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9