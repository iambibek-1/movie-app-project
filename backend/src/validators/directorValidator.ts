import Joi from 'joi';

const createDirector = Joi.object({
    name: Joi.string().label('Name').required(),
    country: Joi.string().label('Country').required(),
    dob: Joi.string().label('Date of Birth').required(),
});
export {createDirector}