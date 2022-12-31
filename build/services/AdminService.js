"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const fs_1 = __importDefault(require("fs"));
const Admin_1 = require("./Admin");
const VerificarAdmin_1 = __importDefault(require("./VerificarAdmin"));
class AdminService {
    constructor() {
        this.Login = (Nome, Senha) => {
            const resposta = (0, VerificarAdmin_1.default)(Nome, Senha);
            return resposta;
        };
    }
    alterarAdmin(nomeAdmin, senhaAdmin, nome, senha, acao, novoNome, novaSenha) {
        if ((0, VerificarAdmin_1.default)(nomeAdmin, senhaAdmin)) {
            if (acao === 'adicionar') {
                Admin_1.admin.push({ NomeAdmin: nome, SenhaAdmin: senha });
            }
            else if (acao === 'remover') {
                Admin_1.admin.splice(Admin_1.admin.findIndex(item => item.NomeAdmin === nome), 1);
            }
            else if (acao === 'alterar') {
                if (novoNome != undefined) {
                    const index = Admin_1.admin.findIndex(item => item.NomeAdmin === nome);
                    try {
                        Admin_1.admin[index].NomeAdmin = novoNome;
                    }
                    catch (_a) {
                    }
                }
                if (novaSenha != undefined) {
                    const index = Admin_1.admin.findIndex(item => item.NomeAdmin === nome);
                    try {
                        Admin_1.admin[index].SenhaAdmin = novaSenha;
                    }
                    catch (_b) {
                    }
                }
            }
            fs_1.default.writeFileSync('./admin.ts', `export const admin: Admin[] = ${JSON.stringify(Admin_1.admin)};`);
        }
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map