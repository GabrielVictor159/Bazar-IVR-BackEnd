"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProdutoDTO {
    constructor(Nome, Valor, Descricao, Quantidade, Foto) {
        this.Nome = Nome;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.Foto = Foto;
        this.Valor = Valor;
    }
    getNome() {
        return this.Nome;
    }
    setNome(Nome) {
        this.Nome = Nome;
    }
    getDescricao() {
        return this.Descricao;
    }
    setDescricao(Descricao) {
        this.Descricao = Descricao;
    }
    getQuantidade() {
        return this.Quantidade;
    }
    setQuantidade(Quantidade) {
        this.Quantidade = Quantidade;
    }
    getFoto() {
        return this.Foto;
    }
    setFoto(Foto) {
        this.Foto = Foto;
    }
    getValor() {
        return this.Valor;
    }
    setValor(Valor) {
        this.Valor = Valor;
    }
}
exports.default = ProdutoDTO;
//# sourceMappingURL=ProdutoDTO.js.map