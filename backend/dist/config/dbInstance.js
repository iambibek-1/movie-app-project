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
exports.Database = void 0;
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Database {
    constructor() {
        this.host = _1.db.host;
        this.username = _1.db.username;
        this.password = _1.db.password;
        this.name = _1.db.name;
        this.port = Number(_1.db.port);
        this.dialect = _1.db.dialect;
        this.sequelize = new sequelize_1.Sequelize(this.name, this.username, this.password, {
            host: this.host,
            dialect: this.dialect,
            port: this.port,
        });
    }
    static get() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.authenticate();
                console.info(`${this.dialect}database connected`);
                return this.sequelize;
            }
            catch (error) {
                console.error(error.message);
                return error;
            }
        });
    }
}
const database = Database.get();
exports.Database = database;
