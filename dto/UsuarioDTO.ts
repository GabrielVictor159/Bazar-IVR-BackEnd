var md5 = require('md5');
 class UsuarioDTO {
    private CPF!: String;
    private Nome!: String;
    private Senha!: String;
    private Endereco!: String;
    private DataDeNascimento!: Date;
    private Email!: String;
    private Telefone!:number;

    constructor(CPF: String, Nome: String, Senha: String, Endereco: String, DataDeNascimento: Date, Email:String, Telefone:number) {
        this.CPF = CPF;
        this.Nome = Nome;
        this.Senha = md5(Senha);
        this.Endereco = Endereco;
        this.DataDeNascimento = DataDeNascimento;
        this.Email = Email;
        this.Telefone = Telefone;
    }
    public getCPF(): String {
        return this.CPF
    }
    public setCPF(CPF: String): void {
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
    public getEmail(): String {
        return this.Email
    }
    public setEmail(Email:String): void {
        this.Email= Email
    }
    public getTelefone(): number {
        return this.Telefone
    }
    public setTelefone(Telefone:number): void {
        this.Telefone= Telefone
    }
}

export default UsuarioDTO;