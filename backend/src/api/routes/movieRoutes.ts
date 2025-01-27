import { Router } from "express";
import { movieController } from "../controllers/movieController";
import { exceptionHandler, Validator } from "../../middlewares";
import { createMovie } from "../../validators";

const movieRoutes = Router();
movieRoutes.get('/',exceptionHandler(movieController.getMovies));
movieRoutes.post('/add',
    exceptionHandler(Validator.check(createMovie)),
    exceptionHandler(movieController.postMovies));
movieRoutes.patch('/:id',exceptionHandler(movieController.update));
movieRoutes.delete('/:id',exceptionHandler(movieController.delete));

export default movieRoutes;