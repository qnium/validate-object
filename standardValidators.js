var validators = require('./validator.js').validators;

validators.required = function()
{
    if ( this.object === undefined || this.object == null )
        throw new ValidationException('Field {0} is not available'.format(object.name));
}

module.exports;