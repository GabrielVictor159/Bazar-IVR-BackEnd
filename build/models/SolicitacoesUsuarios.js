"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const DB_1 = __importDefault(require("../Infra/DB"));
const SolicitacoesUsuarios = DB_1.default.define('solicitacoesusuarios', {
    idSolicitacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    LastName: {
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
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    DataDeCriacao: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
    },
}, { timestamps: false });
SolicitacoesUsuarios.sync();
exports.default = SolicitacoesUsuarios;
//# sourceMappingURL=SolicitacoesUsuarios.js.map