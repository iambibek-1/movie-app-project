import { Router } from "express";

import { exceptionHandler, Validator } from "../../middlewares";
import {signupValidator} from '../../validators';
import {AuthController} from '../controllers'


const authRoutes = Router();

    authRoutes.post(
        '/signup',
        exceptionHandler(Validator.check(signupValidator)),
        exceptionHandler(AuthController.signup)
    );



export default authRoutes; 