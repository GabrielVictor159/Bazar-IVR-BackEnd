"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const DB_1 = __importDefault(require("../Infra/DB"));
const Admin = DB_1.default.define('admin', {
    idAdmin: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Senha: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
}, { timestamps: false });
Admin.sync();
exports.default = Admin;
//# sourceMappingURL=Admin.js.map