"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Keys_1 = __importDefault(require("../Keys"));
const Sequelize = require('sequelize');
const db = new Sequelize(Keys_1.default.databaseName, Keys_1.default.databaseUsername, Keys_1.default.databasePasswrod, {
    dialect: Keys_1.default.databaseType,
    host: Keys_1.default.databaseHost,
    port: Keys_1.default.databaseHostPort
});
db.authenticate().then(function () {
    console.log('sucesso');
}).catch(function () {
    console.log('error');
});
exports.default = db;
//# sourceMappingURL=DB.js.map