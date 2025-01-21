"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const genreRoutes_1 = __importDefault(require("./genreRoutes"));
const directorRoutes_1 = __importDefault(require("./directorRoutes"));
const router = express_1.default.Router();
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.use(body_parser_1.default.json());
router.use('/users', userRoutes_1.default);
router.use('/genre', genreRoutes_1.default);
router.use('/director', directorRoutes_1.default);
exports.default = router;
