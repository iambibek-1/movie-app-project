import {Router} from "express";
import { genreController } from "../controllers/genreController";
import { exceptionHandler } from "../../middlewares";
import { UserController } from "../controllers";

const genreRoutes = Router();

genreRoutes.get('/genre',exceptionHandler(genreController.getGenre));
genreRoutes.post('/postgenre',exceptionHandler(genreController.postGenre));
export default genreRoutes;
