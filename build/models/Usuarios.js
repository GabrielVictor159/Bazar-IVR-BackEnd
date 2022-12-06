"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const DB_1 = __importDefault(require("../Infra/DB"));
const Usuarios = DB_1.default.define('usuarios', {
    CPF: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DataDeNascimento: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    }
}, { timestamps: false });
exports.default = Usuarios;
//# sourceMappingURL=Usuarios.js.map