/**
 * when success is true it will return a resolve promise, otherwise
 * do nothing.
 * @param {boolean} success
 * @returns: returns object on success. 
 */
function getPaymentTokenFromAPI(success) {
    return new Promise((res) => {
        if (success === true) {
            res({data: 'Successful response from the API' });
        }
    });
}

module.exports =getPaymentTokenFromAPI;
