import { Router } from "express";
import { UserController } from "../controllers/userController";
import { exceptionHandler } from "../../middlewares";

const userRoutes = Router();


userRoutes.get('/', exceptionHandler(UserController.getUser));
userRoutes.post('/',exceptionHandler(UserController.postUser));
// userRoutes.patch('/:id',exceptionHandler(UserController.update));
// userRoutes.delete('/:id',exceptionHandler(UserController.delete));
// userRoutes.get('/get/:id',exceptionHandler(UserController.getUserById));
export default userRoutes;