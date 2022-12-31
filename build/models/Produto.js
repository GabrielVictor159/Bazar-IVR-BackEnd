"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const DB_1 = __importDefault(require("../Infra/DB"));
const Produto = DB_1.default.define('produto', {
    idProduto: {
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
    Descricao: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Quantidade: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    NomeImage: {
        type: Sequelize.STRING,
        allowNull: true
    },
    Valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}, { timestamps: false });
Produto.sync();
exports.default = Produto;
//# sourceMappingURL=Produto.js.map