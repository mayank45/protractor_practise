import {Config} from "protractor";

export let config: Config = {
    directConnect:true,
    framework:'custom',
    frameworkPath:require.resolve('protractor-cucumber-framework'),
    specs:['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        //format:'json:./cucumberReport.json',
        require: [
            './stepDefinitions/step.js' // accepts a glob
        ]
    }
};