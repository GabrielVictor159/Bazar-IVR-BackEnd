"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CompraDTO {
    constructor(Usuario_CPF, idProduto, quantidade) {
        this.Usuario_CPF = Usuario_CPF;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
    }
    getUsuario_CPF() {
        return this.Usuario_CPF;
    }
    setUsuario_CPF(Usuario_CPF) {
        this.Usuario_CPF = Usuario_CPF;
    }
    getidProduto() {
        return this.idProduto;
    }
    setidProduto(idProduto) {
        this.idProduto = idProduto;
    }
    getquantidade() {
        return this.quantidade;
    }
    setquantidade(quantidade) {
        this.quantidade = quantidade;
    }
}
exports.default = CompraDTO;
//# sourceMappingURL=CompraDTO.js.map