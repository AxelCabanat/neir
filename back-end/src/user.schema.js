const Joi = require('joi');
const joiPassword = require('joi-password');

const schema = Joi.object({
	name: Joi.string().min(3).max(20).required(),
	password: Joi.string().min(8).required()
});

const clearSchema = Joi.object({
	name: Joi.string().required(),
	password: Joi.string().required()
});

module.exports = { schema, clearSchema };
