class ProdutoDTO {
    private Nome!: String;
    private Descricao?: String;
    private Quantidade?: number;
    private NomeImage?: String;
    private Valor!: number;

    constructor(Nome: String, Valor: number, Descricao?: String, Quantidade?: number,  nomeImage?: String) {
        this.Nome = Nome;
        this.Descricao = Descricao;
        this.Quantidade = Quantidade;
        this.NomeImage =  nomeImage;
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
    public getNomeImage() {
        return this. NomeImage
    }
    public setNomeImage( NomeImage: String): void {
        this. NomeImage =  NomeImage
    }
    public getValor(): number {
        return this.Valor
    }
    public setValor(Valor: number): void {
        this.Valor = Valor
    }

}
export default ProdutoDTO