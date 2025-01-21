"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreController = void 0;
const genreService_1 = require("../../services/genreService");
class genreController {
    static getGenre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const genre = yield new genreService_1.GenreService().findAll();
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Genre fetched successfully",
                data: genre,
            });
        });
    }
    static postGenre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const genreService = new genreService_1.GenreService();
            const newGenre = yield genreService.createData(data);
            const responseJson = {
                success: true,
                status: 201,
                message: "Genre created successfully",
                data: newGenre,
            };
            // console.log(responseJson)
            return res.status(201).json(responseJson);
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = req.body;
            const update = yield new genreService_1.GenreService().updateData(id, data);
            if (update === false) {
                throw new Error(`Couldnot update genre with id${id}`);
            }
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Genre updated successfully",
                // data:update,
            });
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield new genreService_1.GenreService().deleteData(id);
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Genre deleted successfully",
            });
        });
    }
}
exports.genreController = genreController;
