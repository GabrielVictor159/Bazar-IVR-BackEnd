"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const VerificarAdmin_1 = __importDefault(require("./VerificarAdmin"));
class AdminService {
    constructor() {
        this.Login = (Nome, Senha) => {
            const resposta = (0, VerificarAdmin_1.default)(Nome, Senha);
            return resposta;
        };
    }
}
exports.AdminService = AdminService;
//# sourceMappingURL=AdminService.js.map