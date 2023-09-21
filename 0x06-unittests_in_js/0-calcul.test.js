const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe("calculateNumber", function () {
    describe("using integers", function () {
        it("should add two rounded integers", function() {
            const a = 5;
            const b = 7;
            const expectedVal = 12;
    
            const theSum = calculateNumber(a, b);
    
            assert.strictEqual(expectedVal, theSum);
        });
    });
});

describe("calculateNumber", function () {
    describe("using floats", function () {
        it("should add two rounded floats", function () {
            const a = 12.6;
            const b = 13.1;
            const expectedVal = 26;
    
            const theSum = calculateNumber(a, b);
    
            assert.strictEqual(expectedVal, theSum);
        });
    });
});

describe("calculateNumber", function () {
    describe("using floats and integers", function () {
        it("should add one float and integer", function () {
            const a = 5.2;
            const b = 2;
            const expectedVal = 7;

            const theSum = calculateNumber(a, b);

            assert.strictEqual(expectedVal, theSum);
        });
    });
});
