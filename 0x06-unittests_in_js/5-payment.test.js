const sinon = require("sinon");
// const chai = require('chai');
// const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToAPI', function () {
    // Declare the stub and spy variables
    let calculNumStub100;
    let consoleLogSpy100;
    let calculNumStub10;
    let consoleLogSpy10;
    describe('sendPaymentRequestToAPI with 100 and 20', function () {
        beforeEach(function () {
            // stub Utils.calculateNumber to always return 120
            calculNumStub100 = sinon.stub(Utils, 'calculateNumber').returns(120);
            // spy the console.log
            consoleLogSpy100 = sinon.spy(console, 'log');
        });
        afterEach(function () {
            // After each test, restore the original console.log
            consoleLogSpy100.restore();
            calculNumStub100.restore();
        });
        it('validate the usage of the Utils function', function () {
            // run the function with the parameters
            sendPaymentRequestToApi(100, 20);
            // check that the spy was called exactly once
            expect(calculNumStub100.calledOnce).to.be.true;
            // check that spy was called at least once with the provided arguments
            expect(calculNumStub100.calledWith('SUM', 100, 20)).to.be.true;
            expect(consoleLogSpy100.calledOnce).to.be.true;
    
            // Check that console.log was called with the expected message
            expect(consoleLogSpy100.calledWith('The total is: 120')).to.be.true;
        });
    });
    describe('sendPaymentRequestToAPI with 10 and 10', function () {
        beforeEach(function () {
            // stub Utils.calculateNumber to always return 20
            calculNumStub10 = sinon.stub(Utils, 'calculateNumber').returns(20);
            // spy the console.log
            consoleLogSpy10 = sinon.spy(console, 'log');
        });
        afterEach(function () {
            // After each test, restore the original console.log
            consoleLogSpy10.restore();
            calculNumStub10.restore();
        });
        it('validate the usage of the Utils function', function () {
            // run the function with the parameters
            sendPaymentRequestToApi(10, 10);
            // check that the spy was called exactly once
            expect(calculNumStub10.calledOnce).to.be.true;
            // check that spy was called at least once with the provided arguments
            expect(calculNumStub10.calledWith('SUM', 10, 10)).to.be.true;
            expect(consoleLogSpy10.calledOnce).to.be.true;
    
            // Check that console.log was called with the expected message
            expect(consoleLogSpy10.calledWith('The total is: 20')).to.be.true;
        });
    });
});
