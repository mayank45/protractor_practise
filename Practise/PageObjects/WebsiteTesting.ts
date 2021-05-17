import {by, element, ElementFinder} from "protractor";

export class WebsiteTesting{
    inputCode:ElementFinder;
    search:ElementFinder;


    constructor() {
        this.inputCode=element(by.id("mat-input-0"));
        this.search=element(by.css("button[class='pin-search-btn']"));

    }
}