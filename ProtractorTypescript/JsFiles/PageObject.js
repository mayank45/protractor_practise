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
const protractor_1 = require("protractor");
const calculator_1 = require("./PageObjects/calculator");
const angularHome_1 = require("./PageObjects/angularHome");
describe('test suite', () => {
    it('calc testing using page object', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstElement.sendKeys("3");
        yield calc.secondElement.sendKeys("4");
        yield calc.go.click();
        calc.result.getText().then(function (val) {
            console.log(val);
        });
    }));
    it('page object test', () => __awaiter(void 0, void 0, void 0, function* () {
        let ang = new angularHome_1.angularHome();
        yield protractor_1.browser.get("https://angularjs.org/");
        yield ang.angularLink.click();
        yield protractor_1.browser.sleep(3000);
        yield ang.search.sendKeys("hello");
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZU9iamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL1BhZ2VPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBZ0Q7QUFDaEQseURBQW9EO0FBQ3BELDJEQUFzRDtBQUV0RCxRQUFRLENBQUMsWUFBWSxFQUFDLEdBQUUsRUFBRTtJQUV0QixFQUFFLENBQUMsZ0NBQWdDLEVBQUMsR0FBUSxFQUFFO1FBQzFDLElBQUksSUFBSSxHQUFDLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBQzFCLE1BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUNoRSxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztZQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUlILEVBQUUsQ0FBQyxrQkFBa0IsRUFBQyxHQUFRLEVBQUU7UUFDNUIsSUFBSSxHQUFHLEdBQUMsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDekIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQTtBQUdOLENBQUMsQ0FBQyxDQUFBIn0=