"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const middlewares_1 = require("../../middlewares");
const userRoutes = (0, express_1.Router)();
userRoutes.get('/', (0, middlewares_1.exceptionHandler)(userController_1.UserController.getUser));
userRoutes.post('/', (0, middlewares_1.exceptionHandler)(userController_1.UserController.postUser));
exports.default = userRoutes;
