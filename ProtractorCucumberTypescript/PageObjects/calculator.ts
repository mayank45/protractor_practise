import {by, element, ElementFinder} from "protractor";

export class calculator{
    firstElement:ElementFinder;
    secondElement:ElementFinder;
    go:ElementFinder;
    result:ElementFinder;

    constructor() {
        this.firstElement=element(by.model("first"));
        this.secondElement=element(by.model("second"));
        this.go=element(by.id("gobutton"));
        this.result=element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}