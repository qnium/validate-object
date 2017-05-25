var validate = require('../index.js').validate;
var assert = require('assert');

var testObject = {
    id: 'test', //Optional
    //name: 'text',
    time: 'someTime',
    number: 35
}

var validateObject = function()
{
    validate(testObject.name).required();
}

describe('validation', function()
{
    describe('#validate required', function() {
        it('Exception Thrown on test app', function () {
            assert.throws(function() {
                    validateObject();
             });
        });
    });
});