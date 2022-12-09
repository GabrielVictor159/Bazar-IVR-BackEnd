var md5 = require('md5');
 class UsuarioDTO {
    private FirstName!: String;
    private LastName!: String;
    private Senha!: String;
    private Endereco!: String;
    private DataDeNascimento!: Date;
    private Email!: String;
    private Telefone!:number;

    constructor( FirstName: String, LastName: String, Senha: String, Endereco: String, DataDeNascimento: Date, Email:String, Telefone:number) {
        this.LastName = LastName;
        this.FirstName = FirstName;
        this.Senha = md5(Senha);
        this.Endereco = Endereco;
        this.DataDeNascimento = DataDeNascimento;
        this.Email = Email;
        this.Telefone = Telefone;
    }
    
    public getFirstName(): String {
        return this.FirstName
    }
    public setFirstName(FirstName: String): void {
        this.FirstName = FirstName
    }
    public getLastName(): String {
        return this.LastName
    }
    public setLastName(LastName: String): void {
        this.LastName = LastName
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