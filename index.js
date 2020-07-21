'use strict';

module.exports = function(num) {
    if(typeof num !== 'number') {
        throw new TypeError('Expected a number');
    }

    return Number.isInteger(Math.sqrt(num));
};
