const Utils = require('./utils.js');

/**
 * sendPaymentRequestToApi - return the sum of the totalAmount and
 * totalShipping.
 * @param {number} totalAmount 
 * @param {number} totalShipping
 * @returns: the sum of the two parameters.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
