import {Router} from "express";
import { directorsController } from "../controllers";
import { exceptionHandler, Validator } from "../../middlewares";
import { createDirector } from "../../validators";

const directorRoutes = Router();
directorRoutes.get('/',exceptionHandler(directorsController.getDirectors));
directorRoutes.post('/add',
    exceptionHandler(Validator.check(createDirector)),
    exceptionHandler(directorsController.postDirectors));
directorRoutes.patch('/:id',exceptionHandler(directorsController.update));
directorRoutes.delete('/:id',exceptionHandler(directorsController.delete));
directorRoutes.get('/get/:id',exceptionHandler(directorsController.getDirectorById));

export default directorRoutes; 