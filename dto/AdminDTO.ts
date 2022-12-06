var md5 = require('md5');
export class AdminDTO {
    private Nome!: String;
    private Senha!: String;

    constructor(Nome: String, Senha: String) {
        this.Nome = Nome;
        this.Senha = md5(Senha)
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


}
