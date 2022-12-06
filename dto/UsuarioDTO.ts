var md5 = require('md5');
export class UsuarioDTO {
    private CPF!: number;
    private Nome!: String;
    private Senha!: String;
    private Endereco!: String;
    private DataDeNascimento!: Date;

    constructor(CPF: number, Nome: String, Senha: String, Endereco: String, DataDeNascimento: Date) {
        this.CPF = CPF;
        this.Nome = Nome;
        this.Senha = md5(Senha);
        this.Endereco = Endereco;
        this.DataDeNascimento = DataDeNascimento;
    }
    public getCPF(): number {
        return this.CPF
    }
    public setCPF(CPF: number): void {
        this.CPF = CPF;
    }
    public getNome(): String {
        return this.Nome
    }
    public setNome(Nome: String): void {
        this.Nome = Nome
    }
    public getSenha(): String {
        return this.Senha
    }
    public setSenha(Senha: String): void {
        this.Senha = md5(Senha)
    }
    public getEndereco(): String {
        return this.Endereco
    }
    public setEndereco(Endereco: String): void {
        this.Endereco = Endereco
    }
    public getDataDeNascimento(): Date {
        return this.DataDeNascimento
    }
    public setDataDeNascimento(DataDeNascimento: Date): void {
        this.DataDeNascimento = DataDeNascimento
    }
}