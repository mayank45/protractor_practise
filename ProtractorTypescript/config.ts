import {Config} from "protractor";

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,
    specs:['PageObject.js']
};