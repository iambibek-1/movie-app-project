import Joi from 'joi';

const createGenre = Joi.object({
    name: Joi.string().label('Name').required(),
});
export {createGenre}