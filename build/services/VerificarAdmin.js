"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
function VerificarAdmin(nome, senha) {
    const data = fs_1.default.readFileSync('admin.json', 'utf8');
    // Converte o conteúdo do arquivo para um objeto JavaScript
    let admin = JSON.parse(data);
    return admin.some((a) => a.NomeAdmin === nome && a.SenhaAdmin === senha);
}
exports.default = VerificarAdmin;
//# sourceMappingURL=VerificarAdmin.js.map