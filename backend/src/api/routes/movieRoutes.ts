import { Router } from "express";
import { movieController } from "../controllers/movieController";
import { exceptionHandler, Multer, Validator } from "../../middlewares";
import { createMovie } from "../../validators";
import { Gaurd } from "../../middlewares/gaurd";


const movieRoutes = Router();
movieRoutes.get('/',exceptionHandler(movieController.getMovies));
movieRoutes.post('/add',
    exceptionHandler(Gaurd.grantAccess),
    exceptionHandler(Gaurd.grantRole('admin')),
    exceptionHandler(new Multer().uploadSingle('file')),
    exceptionHandler(Validator.check(createMovie)),
    exceptionHandler(movieController.postMovies));
movieRoutes.patch('/:id',exceptionHandler(movieController.update));
movieRoutes.delete('/:id',exceptionHandler(movieController.delete));

export default movieRoutes;