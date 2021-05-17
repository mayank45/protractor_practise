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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const WebsiteTesting_1 = require("../PageObjects/WebsiteTesting");
let web = new WebsiteTesting_1.WebsiteTesting();
cucumber_1.Given('will navigate to cowin website', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get('https://www.cowin.gov.in/home');
}));
cucumber_1.When('will enter {string} as pincode', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield web.inputCode.sendKeys(string);
    yield web.search.click();
}));
cucumber_1.Then('will receive output', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.sleep(10000);
    console.log("helo");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaURBQW1EO0FBQ25ELDJDQUFtQztBQUNuQyxrRUFBNkQ7QUFFN0QsSUFBSSxHQUFHLEdBQUMsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFFN0IsZ0JBQUssQ0FBQyxnQ0FBZ0MsRUFBRSxHQUFRLEVBQUU7SUFDOUMsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQ25ELE1BQU0sR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBRTdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMscUJBQXFCLEVBQUUsR0FBUSxFQUFFO0lBQ2xDLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFeEIsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9