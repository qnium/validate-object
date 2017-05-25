var validators = function(){
    
}

module.exports.ValidationException = function(message)
{
    this.message = message;
}

module.exports.validate = function (object)
{
    var validator = function() { this.object = object };
    validator.prototype = new validators();
    return validator;
}

module.exports.validators = validators;