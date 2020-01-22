const Joi = require('joi');
var { responseHandler } = require("./response");



var validate = function functionA(schema) {
    return (req, res, next) => {
        const options = {
            abortEarly: false,
            stripUnknown: { arrays: true, objects: true }
        }
        var errObj = [];
        var result = Joi.validate(req.body, schema, options);
        if (result.error) {
            var error = result.error.details[0];
            var code = -1;
            switch (error.type) {
                case 'any.required':
                    code = 2
                    break;
                case 'date.format':
                    code = 3
                    break;
                default:
                    break;
            }
            res.status(400);
            return next(responseHandler(code, error.message.replace(/['"]+/g, '')));
            // result.error.details.forEach(function (error) {
            //     errObj.push(
            //         {
            //             field: error.path[0],
            //             messages: error.message.replace(/['"]+/g, ''),
            //             types: error.type
            //         });
            // });
            // res.status(400).send({ result: errObj })
        } else {
            req.body = result.value
            next();
        }
    };
}
module.exports = { validate };
