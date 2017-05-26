var validators = require('./validator.js').validators;

validators.prototype.required = function()
{
    this.addValidator(function(property)
    {
        if ( property === undefined || property == null )
            throw new ValidationException('Field {0} is not available'.format(object.name));
    });

    return this;
}

module.exports;