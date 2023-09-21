class Utils {
    /**
     * calculate the value of two parameters.
     *
     * @param {number} a - integer or float
     * @param {number} b - integer or float
     * @returns: sum, subtracted or divided value of the params
     */
    static calculateNumber(type, a, b) {
        switch (type) {
            case 'SUM':
                return Math.round(a) + Math.round(b);
            case 'SUBTRACT':
                return Math.round(a) - Math.round(b);
            case 'DIVIDE':
                if (Math.round(b) === 0) {
                    return 'Error';
                }
                return Math.round(a) / Math.round(b);
        }
    }
}

module.exports = Utils;
