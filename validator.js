var validators = function(){
    
}

module.exports.ValidationException = function(message)
{
    this.message = message;
}

function searchProperty(rootObject, obj, stack, propertySearchFunction) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                searchProperty(rootObject, obj[property], stack + '.' + property, propertySearchFunction);
            } else {
                if ( obj[property] == propertySearchFunction(rootObject) )
                    return {
                        property: obj[property],
                        name: stack === ''? property : stack + '.property'
                    }
            }
        }
    }

    return undefined;
}

var Property = function(validator)
{
    this.proper
}

var validator = function()
{
    this._currentProperty = null;
    this._validators = [];


    this.addValidator = function(validator)
    {
        this._currentProperty.validators.push(validator);
    }

    this.property = function ( propertySearchFunction )
    {
        this._currentProperty = { propertySearchFunction: propertySearchFunction, validators: [] };
        this._validators.push( this._currentProperty );
        return this;
    }

    this.execute = function(object)
    {
        //iterate over all properties that have validators
       this._validators.forEach(function(element) {
            //Search property by propertySearchFunction
            var prop = searchProperty(object, object, '', element.propertySearchFunction);
            //property found, lets execute all validators step by step
            element.validators.forEach(function(propertyValidator) {
                propertyValidator(prop.property);
            });
        });
    }
}

module.exports.validate = function ()
{
    validator.prototype = new validators();
    return new validator();
}

module.exports.validators = validators;