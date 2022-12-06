class ProdutoDTO {
    private Nome!: String;
    private Descricao?: String;
    private Quantidade?: number;
    private Foto?: Blob;
    private Valor!: number;

    constructor(Nome: String, Valor: number, Descricao?: String, Quantidade?: number, Foto?: Blob) {
        this.Nome = Nome;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.Foto = Foto;
        this.Valor = Valor;
    }
    public getNome(): String {
        return this.Nome
    }
    public setNome(Nome: String): void {
        this.Nome = Nome
    }
    public getDescricao() {
        return this.Descricao
    }
    public setDescricao(Descricao: String): void {
        this.Descricao = Descricao
    }
    public getQuantidade() {
        return this.Quantidade
    }
    public setQuantidade(Quantidade: number): void {
        this.Quantidade = Quantidade
    }
    public getFoto() {
        return this.Foto
    }
    public setFoto(Foto: Blob): void {
        this.Foto = Foto
    }
    public getValor(): number {
        return this.Valor
    }
    public setValor(Valor: number): void {
        this.Valor = Valor
    }

}
export default ProdutoDTO