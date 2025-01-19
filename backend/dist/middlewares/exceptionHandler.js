"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionHandler = void 0;
const exceptionHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch((error) => next(error));
exports.exceptionHandler = exceptionHandler;
