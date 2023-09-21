const sinon = require("sinon");
// const chai = require('chai');
// const expect = chai.expect;
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    // Declare the stub and spy variables
    let calculNumStub;
    let consoleLogSpy;
    beforeEach(function () {
        // stub Utils.calculateNumber to always return 10
        calculNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // spy the console.log
        consoleLogSpy = sinon.spy(console, 'log');
      });
        // After each test, restore the original console.log
    afterEach(function () {
        consoleLogSpy.restore();
        calculNumStub.restore();
    });
    // // create the spy / wrapper of an existing function
    // const utilSpy = sinon.spy(Utils, 'calculateNumber');
    it('validate the usage of the Utils function', function () {
        // run the function with the parameters
        sendPaymentRequestToApi(100, 20);
        // check that the spy was called exactly once
        expect(calculNumStub.calledOnce).to.be.true;
        // check that spy was called at least once with the provided arguments
        expect(calculNumStub.calledWith('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;

        // Check that console.log was called with the expected message
        expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;
    });
});
