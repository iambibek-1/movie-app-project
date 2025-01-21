import {Router} from "express";
import { genreController } from "../controllers/genreController";
import { exceptionHandler } from "../../middlewares";

const genreRoutes = Router();

genreRoutes.get('/',exceptionHandler(genreController.getGenre));
genreRoutes.post('/add',exceptionHandler(genreController.postGenre));
genreRoutes.patch('/:id',exceptionHandler(genreController.update));
genreRoutes.delete('/:id',exceptionHandler(genreController.delete));




export default genreRoutes;
