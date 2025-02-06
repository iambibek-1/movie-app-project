import { Router } from "express";
import { directorsController } from "../controllers";
import { exceptionHandler, Validator } from "../../middlewares";
import { createDirector } from "../../validators";
import { Gaurd } from "../../middlewares/gaurd";

const directorRoutes = Router();
directorRoutes.get("/", exceptionHandler(directorsController.getDirectors));
directorRoutes.get(
  "/get/:id",
  exceptionHandler(directorsController.getDirectorById)
);

directorRoutes.post(
  "/add",
  exceptionHandler(Gaurd.grantAccess),
  exceptionHandler(Validator.check(createDirector)),
  exceptionHandler(directorsController.postDirectors)
);
directorRoutes.patch(
  "/:id",
  exceptionHandler(Gaurd.grantAccess),
  exceptionHandler(directorsController.update)
);
directorRoutes.delete(
  "/:id",
  exceptionHandler(Gaurd.grantAccess),
  exceptionHandler(directorsController.delete)
);

export default directorRoutes;
