"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProdutoDTO {
    constructor(Nome, Valor, Descricao, Quantidade, nomeImage) {
        this.Nome = Nome;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.NomeImage = nomeImage;
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
    getNomeImage() {
        return this.NomeImage;
    }
    setNomeImage(NomeImage) {
        this.NomeImage = NomeImage;
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