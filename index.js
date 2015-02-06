'use strict';

module.exports = function(num) {
    if(typeof num !== 'number') {
        throw new TypeError('Expected a number');
    }

    var sqrt = Math.sqrt(num);

    return sqrt === Math.floor(sqrt);
};