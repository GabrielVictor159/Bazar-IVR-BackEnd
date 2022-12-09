class CompraDTO {
    private idCompra!: number;
    private idUsuario!: number;
    private idProduto!: number;
    private quantidade!: number;
    private CEP!: string;
    private Endereco!:string;

    constructor(idCompra: number,idUsuario: number, idProduto: number, quantidade: number, CEP:string, Endereco:string) {
        this.idUsuario = idUsuario;
        this.idCompra = idCompra;
        this.idProduto = idProduto;
        this.quantidade = quantidade;
        this.CEP = CEP;
        this.Endereco = Endereco;
    }
    public getCEP(): string{
        return this.CEP
    }
    public setCEP(CEP:string):void{
        this.CEP = CEP
    }
    public getEndereco(): string{
        return this.Endereco
    }
    public setEndereco(Endereco:string):void{
        this.Endereco = Endereco
    }
    public getidUsuario(): number{
        return this.idUsuario
    }
    public setidUsuario(idUsuario:number):void {
        this.idUsuario = idUsuario
    }
    public getidCompra(): number {
        return this.idCompra
    }
    public setidCompra(idCompra: number): void {
        this.idCompra = idCompra
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

export default CompraDTO