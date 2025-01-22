import {Router} from "express";
import { directorsController } from "../controllers";
import { exceptionHandler } from "../../middlewares";

const directorRoutes = Router();
directorRoutes.get('/',exceptionHandler(directorsController.getDirectors));
directorRoutes.post('/add',exceptionHandler(directorsController.postDirectors));
directorRoutes.patch('/:id',exceptionHandler(directorsController.update));
directorRoutes.delete('/:id',exceptionHandler(directorsController.delete));
directorRoutes.get('/get/:id',exceptionHandler(directorsController.getDirectorById));

export default directorRoutes; 