'use strict'

var validate = require('../index.js').validate;
var assert = require('assert');

var testObject1 = {
    id: 'test', //Optional
    //name: 'text',
    time: 'someTime',
    number: 35
}

var testObject2 = {
    //id: 'test', //Optional
    name: 'text',
    time: 'someTime',
    number: 35
}

var testValidator = validate()
.property(o => o.id).required();

var validateObject = function()
{
    testValidator.execute(testObject);
}

describe('validation', function()
{
    describe('#validate required ', function() {
        it('Exception not thrown if property present', function () {
            assert.doesNotThrow(function() {
                    testValidator.execute(testObject1);
             });
        });
        it('Exception is thrown if property not present', function () {
            assert.throws(function() {
                    testValidator.execute(testObject2);
             });
        });
    });
});