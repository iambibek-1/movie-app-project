import Joi from "joi";
import { RoleEnum } from "../enums";

export const signupValidator = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  role: Joi.string().valid(RoleEnum.admin, RoleEnum.user).required(),
});
