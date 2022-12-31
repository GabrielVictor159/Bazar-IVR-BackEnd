"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5 = require('md5');
class UsuarioDTO {
    constructor(FirstName, LastName, Senha, Endereco, DataDeNascimento, Email, Telefone, idCompras) {
        this.LastName = LastName;
        this.FirstName = FirstName;
        this.Senha = md5(Senha);
        this.Endereco = Endereco;
        this.DataDeNascimento = DataDeNascimento;
        this.Email = Email;
        this.Telefone = Telefone;
        this.idCompras = idCompras;
    }
    getidCompras() {
        return this.idCompras;
    }
    setidCompras(idCompras) {
        this.idCompras = idCompras;
    }
    getFirstName() {
        return this.FirstName;
    }
    setFirstName(FirstName) {
        this.FirstName = FirstName;
    }
    getLastName() {
        return this.LastName;
    }
    setLastName(LastName) {
        this.LastName = LastName;
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
    getEmail() {
        return this.Email;
    }
    setEmail(Email) {
        this.Email = Email;
    }
    getTelefone() {
        return this.Telefone;
    }
    setTelefone(Telefone) {
        this.Telefone = Telefone;
    }
}
exports.default = UsuarioDTO;
//# sourceMappingURL=UsuarioDTO.js.map