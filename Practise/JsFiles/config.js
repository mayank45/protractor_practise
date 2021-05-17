"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: ['../features/demo.feature'],
    cucumberOpts: {
        // require step definitions
        //format:'json:./cucumberReport.json',
        require: [
            './stepDefinitions/step.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBQyxJQUFJO0lBQ2xCLFNBQVMsRUFBQyxRQUFRO0lBQ2xCLGFBQWEsRUFBQyxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBQzlELEtBQUssRUFBQyxDQUFDLDBCQUEwQixDQUFDO0lBQ2xDLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixzQ0FBc0M7UUFDdEMsT0FBTyxFQUFFO1lBQ0wsMkJBQTJCLENBQUMsaUJBQWlCO1NBQ2hEO0tBQ0o7Q0FDSixDQUFDIn0=