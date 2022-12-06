"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require('md5');
class UsuarioDTO {
    constructor(CPF, Nome, Senha, Endereco, DataDeNascimento) {
        this.CPF = CPF;
        this.Nome = Nome;
        this.Senha = md5(Senha);
        this.Endereco = Endereco;
        this.DataDeNascimento = DataDeNascimento;
    }
    getCPF() {
        return this.CPF;
    }
    setCPF(CPF) {
        this.CPF = CPF;
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
    getEndereco() {
        return this.Endereco;
    }
    setEndereco(Endereco) {
        this.Endereco = Endereco;
    }
    getDataDeNascimento() {
        return this.DataDeNascimento;
    }
    setDataDeNascimento(DataDeNascimento) {
        this.DataDeNascimento = DataDeNascimento;
    }
}
exports.default = UsuarioDTO;
//# sourceMappingURL=UsuarioDTO.js.map