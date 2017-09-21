/**
 * This Source Code Form is subject to the terms of the MIT License
 */
'use strict';
let fs = require('fs');

// module.exports = function () {
//     return (function(){
//         let  JSONReporter = require('jasmine-json-test-reporter');
//         jasmine.getEnv().addReporter(new JSONReporter({
//             file: '../jasmine-test-results.json',
//             beautify: true,
//             displaySpecDuration: true,
//             indentationLevel: 4 // used if beautify === true
//         }));
//     })();
// };
module.exports = function () {
    return (function(){
        function callback1(){
            console.log('there, callback');
        }
        let configFile = fs.readFileSync('../myDataBase.json'); // add .toString() ?
        let config = JSON.parse(configFile);
        console.log('here!');

        let dbconfigFile = fs.readFileSync('../jasmine-test-results.json'); // add .toString() ?
        let dbconfig = JSON.parse(dbconfigFile);
        let timestamp = new Date();


        const rulare = {
            timestamp: timestamp,
            tests: []
        };

        const dbconfigProps = Object.keys(dbconfig);

        dbconfigProps.forEach(function(property) {
            const test = dbconfig[property];
            rulare.tests.push(test);
        });

        config.push(rulare);
        let newconfigfile = JSON.stringify(config);

        let options = {
            flags: 'a'
        };

        fs.writeFile('../myDataBase.json', newconfigfile, options,callback1()); // for angular
        // fs.writeFile('../app-react/src/myDataBase.json', newconfigfile, options); // for react
    })();
};
