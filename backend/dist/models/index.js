"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const genre_1 = __importDefault(require("./genre"));
const directors_1 = __importDefault(require("./directors"));
const movie_1 = __importDefault(require("./movie"));
const Models = {
    User: user_1.default,
    Genre: genre_1.default,
    Director: directors_1.default,
    Movie: movie_1.default,
};
exports.default = Models;
