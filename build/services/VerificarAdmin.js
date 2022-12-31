"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./Admin");
function VerificarAdmin(nome, senha) {
    return Admin_1.admin.some((a) => a.NomeAdmin === nome && a.SenhaAdmin === senha);
}
exports.default = VerificarAdmin;
//# sourceMappingURL=VerificarAdmin.js.map