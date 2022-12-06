"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const DB_1 = __importDefault(require("../Infra/DB"));
const Compras = DB_1.default.define('compras', {
    Usuario_CPF: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'usuarios',
        referencesKey: 'CPF',
        primaryKey: true
    },
    idProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'produto',
        referencesKey: 'idProduto',
        primaryKey: true
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false });
exports.default = Compras;
//# sourceMappingURL=Compras.js.map