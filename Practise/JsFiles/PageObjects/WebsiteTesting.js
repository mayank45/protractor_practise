"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteTesting = void 0;
const protractor_1 = require("protractor");
class WebsiteTesting {
    constructor() {
        this.inputCode = protractor_1.element(protractor_1.by.id("mat-input-0"));
        this.search = protractor_1.element(protractor_1.by.css("button[class='pin-search-btn']"));
    }
}
exports.WebsiteTesting = WebsiteTesting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2l0ZVRlc3RpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9XZWJzaXRlVGVzdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBc0Q7QUFFdEQsTUFBYSxjQUFjO0lBS3ZCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFFbEUsQ0FBQztDQUNKO0FBVkQsd0NBVUMifQ==