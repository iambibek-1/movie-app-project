import {Router} from "express";
import { genreController } from "../controllers/genreController";
import { exceptionHandler } from "../../middlewares";
import { UserController } from "../controllers";

const genreRoutes = Router();

genreRoutes.get('/',exceptionHandler(genreController.getGenre));
genreRoutes.post('/',exceptionHandler(genreController.postGenre));
export default genreRoutes;
