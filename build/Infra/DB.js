"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require('sequelize');
const db = new Sequelize('loja', 'root', '159487', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});
db.authenticate().then(function () {
    console.log('sucesso');
}).catch(function () {
    console.log('error');
});
exports.default = db;
//# sourceMappingURL=DB.js.map