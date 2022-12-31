"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = __importDefault(require("../models/Admin"));
var md5 = require('md5');
function VerificarAdmin(NomeAdmin, SenhaAdmin) {
    try {
        const buscaAdmin = Admin_1.default.findOne({
            where: {
                Nome: NomeAdmin,
                Senha: md5(SenhaAdmin)
            }
        });
        if (buscaAdmin == null) {
            return false;
        }
        else {
            return true;
        }
    }
    catch (exception) {
        console.log(exception.message);
    }
}
exports.default = VerificarAdmin;
//# sourceMappingURL=VerificarAdmin.js.map