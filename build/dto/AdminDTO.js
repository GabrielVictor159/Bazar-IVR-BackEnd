"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require('md5');
class AdminDTO {
    constructor(Nome, Senha) {
        this.Nome = Nome;
        this.Senha = md5(Senha);
    }
    getNome() {
        return this.Nome;
    }
    setNome(Nome) {
        this.Nome = Nome;
    }
    getSenha() {
        return this.Senha;
    }
    setSenha(Senha) {
        this.Senha = md5(Senha);
    }
}
exports.default = AdminDTO;
//# sourceMappingURL=AdminDTO.js.map