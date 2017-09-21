'use strict';
var expressjs = require('./server.js');

describe('protractor-goodies', function () {
    var _beforeAll = false;
    beforeEach(function () {
        if (_beforeAll) return;
        else {
            browser.get('http://localhost:3000');
            _beforeAll = true;
        }
    });

    describe('history', function () {
     
        it('finds the history', function () {
            // element(by.cssContainingText('p', 'anaaremere')).isPresent().then(function (arr) {
            //     console.log(arr)
            // });
            console.log('started');
          

        });

    });
});
