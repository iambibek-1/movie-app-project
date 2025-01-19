"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const genre_1 = __importDefault(require("./genre"));
const Models = {
    User: user_1.default,
    Genre: genre_1.default,
};
exports.default = Models;
