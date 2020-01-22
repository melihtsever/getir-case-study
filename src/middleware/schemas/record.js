
const BaseJoi = require('joi');
const Extension = require('joi-date-extensions');
const Joi = BaseJoi.extend(Extension);
const schema = {
    startDate: Joi.date().format('YYYY-MM-DD').utc().required(),
    endDate: Joi.date().format('YYYY-MM-DD').utc().required(),
    minCount: Joi.number().integer().min(0).required(),
    maxCount: Joi.number().integer().min(0).required()
};
module.exports = schema;


