import {Config} from "protractor";
import * as reporter from "cucumber-html-reporter"

export let config: Config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',


    directConnect:true,

    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs:['../features/demo.feature'],


    cucumberOpts: {
        // require step definitions
        tags:"@AngularTest",
        format:'json:./cucumberReport.json',
        require: [
            './stepDefinations/*.js' // accepts a glob
        ]
    },

    onComplete: () => {
        //var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './cucumberreportsss.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);
    },





};