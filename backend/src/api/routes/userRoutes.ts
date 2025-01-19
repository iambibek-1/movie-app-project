import { Router } from "express";
import { UserController } from "../controllers/userController";
import { exceptionHandler } from "../../middlewares";

const userRoutes = Router();


userRoutes.get('/', exceptionHandler(UserController.getUser));
userRoutes.post('/',exceptionHandler(UserController.postUser));
export default userRoutes;