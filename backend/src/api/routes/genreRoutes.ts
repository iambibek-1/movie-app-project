import { Router } from "express";
import { genreController } from "../controllers/genreController";
import { exceptionHandler, Validator } from "../../middlewares";
import { createGenre } from "../../validators";

const genreRoutes = Router();

genreRoutes.get("/", exceptionHandler(genreController.getGenre));
genreRoutes.post(
  "/add",
  exceptionHandler(Validator.check(createGenre)),
  exceptionHandler(genreController.postGenre)
);
genreRoutes.patch("/:id", exceptionHandler(genreController.update));
genreRoutes.delete("/:id", exceptionHandler(genreController.delete));

export default genreRoutes;
