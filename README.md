protractor-history
===
let goodies = require('protractor-history')();
onPrepare: 
        JSONReporter = require('jasmine-json-test-reporter');

        jasmine.getEnv().addReporter(new JSONReporter({
            file: '../jasmine-test-results.json',
            beautify: true,
            displaySpecDuration: true,
            indentationLevel: 4 // used if beautify === true
        }));