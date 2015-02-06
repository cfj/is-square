'use strict';
var test = require('ava');
var isSquare = require('./');

test(function(t) {
    t.assert(isSquare(16));
    t.assert(isSquare(1296));
    t.assert(isSquare(487204));
    t.assert(!isSquare(123));
    t.assert(!isSquare(423422));
    t.assert(!isSquare(286.3423));
});