"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const genreController_1 = require("../controllers/genreController");
const middlewares_1 = require("../../middlewares");
const genreRoutes = (0, express_1.Router)();
genreRoutes.get('/genre', (0, middlewares_1.exceptionHandler)(genreController_1.genreController.getGenre));
genreRoutes.post('/postgenre', (0, middlewares_1.exceptionHandler)(genreController_1.genreController.postGenre));
exports.default = genreRoutes;
