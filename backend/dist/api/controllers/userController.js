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
exports.UserController = void 0;
const services_1 = require("../../services");
class UserController {
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield new services_1.UserService().findAll();
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Users fetched successfully",
                data: users,
            });
        });
    }
    static getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.params.email;
            const users = yield new services_1.UserService().findOne(email);
            if (!users) {
                return res.status(404).json({
                    success: false,
                    status: 404,
                    message: `User with this :${email} not found`,
                });
            }
            return res.status(200).json({
                success: true,
                status: 200,
                message: "User fetched successfully",
                data: users,
            });
        });
    }
    static postUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            const users = yield new services_1.UserService().createData(req.body);
            return res.status(201).json({
                success: true,
                status: 201,
                message: "User created successfully",
                data: users,
            });
        });
    }
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const data = req.body;
            const update = yield new services_1.UserService().updateData(id, data);
            if (update === false) {
                throw new Error(`Couldnot update directors with id${id}`);
            }
            return res.status(200).json({
                success: true,
                status: 200,
                message: "User updated successfully",
            });
        });
    }
    static delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            yield new services_1.UserService().deleteData(id);
            return res.status(200).json({
                success: true,
                status: 200,
                message: "User deleted successfully",
            });
        });
    }
}
exports.UserController = UserController;
