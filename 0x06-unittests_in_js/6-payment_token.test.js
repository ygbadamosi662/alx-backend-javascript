const getPaymentTokenFromAPI = require('./6-payment_token.js');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
    it('should return a successful response', function(done) {
        getPaymentTokenFromAPI(true)
        .then((response) => {
          expect(response).to.deep.equal({ data: 'Successful response from the API' });
          done();
        });
    });
});
