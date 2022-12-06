export class CompraDTO {
    private Usuario_CPF!: number;
    private idProduto!: number;
    private quantidade!: number;

    constructor(Usuario_CPF: number, idProduto: number, quantidade: number) {
        this.Usuario_CPF = Usuario_CPF;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
    }
    public getUsuario_CPF(): number {
        return this.Usuario_CPF
    }
    public setUsuario_CPF(Usuario_CPF: number): void {
        this.Usuario_CPF = Usuario_CPF
    }
    public getidProduto(): number {
        return this.idProduto
    }
    public setidProduto(idProduto: number): void {
        this.idProduto = idProduto
    }
    public getquantidade(): number {
        return this.quantidade
    }
    public setquantidade(quantidade: number): void {
        this.quantidade = quantidade
    }
}