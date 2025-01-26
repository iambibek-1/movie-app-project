import { Router } from "express";
import { movieController } from "../controllers/movieController";
import { exceptionHandler } from "../../middlewares";

const movieRoutes = Router();
movieRoutes.get('/',exceptionHandler(movieController.getMovies));
movieRoutes.post('/add',exceptionHandler(movieController.postMovies));
movieRoutes.patch('/:id',exceptionHandler(movieController.update));
movieRoutes.delete('/:id',exceptionHandler(movieController.delete));

export default movieRoutes;