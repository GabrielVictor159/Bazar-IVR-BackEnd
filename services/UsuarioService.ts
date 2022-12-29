import UsuarioDTO from "../dto/UsuarioDTO";
import Usuarios from "../models/Usuarios";
import { SolicitacoesUsuariosService } from "./SolicitacoesUsuariosService";
var md5 = require('md5');
import VerificarAdmin from "./VerificarAdmin";
const solicitacoesUsuarios = new SolicitacoesUsuariosService();
export class UsuarioService {
    constructor() { }

    Cadastrar = async (idSolicitacao: number) => {
        const buscaSolicitacao = await solicitacoesUsuarios.findByid(idSolicitacao);

        console.log(buscaSolicitacao)
        try {
            let dto = new UsuarioDTO(buscaSolicitacao.dataValues.FirstName, buscaSolicitacao.dataValues.LastName, buscaSolicitacao.dataValues.Senha, buscaSolicitacao.dataValues.Endereco, buscaSolicitacao.dataValues.DataDeNascimento, buscaSolicitacao.dataValues.Email, buscaSolicitacao.dataValues.Telefone)

            await Usuarios.create({ FirstName: dto.getFirstName(), LastName: dto.getLastName(), Senha: dto.getSenha(), Endereco: dto.getEndereco(), DataDeNascimento: dto.getDataDeNascimento(), Email: dto.getEmail(), Telefone: dto.getTelefone() })

            try {
                await solicitacoesUsuarios.deletarSolicitacao(buscaSolicitacao.dataValues.idSolicitacao)
                return "Usuario Criado"
            }
            catch (exception: any) {
                return `Error: ${exception.message}`
            }

        }
        catch (exception: any) {
            return `Error: ${exception.message}`
        }



    }




    Logar = async (Email: String, Senha: String) => {
        let senha = md5(Senha)
        const busca = await Usuarios.findOne({ where: { Email: Email, Senha: senha } })
        if (busca === null) {
            return "Usuario não encontrado"
        }
        else {
            busca.Senha = Senha
            return busca
        }

    }
    PutUser = async (User: any) => {
        const { FirstName, LastName, Endereco,  Telefone } = User;
        if(FirstName.toString().length<7){
            return "Primeiro nome muito pequeno, escreva um nome com pelo menos 7 digitos"
        }
        if(LastName.toString().length<7){
            return "Ultimo nome muito pequeno, escreva um nome com pelo menos 7 digitos"
        }
        if(Endereco.toString().length<7){
            return "Por favor insira um Endereco valido"
        }
        let dataDeNascimento = User.DataDeNascimento;
        try{
            dataDeNascimento = new Date(User.DataDeNascimento)
        }
        catch{
            return "Data de nascimento invalida"
        }
        if(Telefone.toString().length !==11){
            return "Telefone invalido"
        }
        let telefone;
        try{
            telefone = parseInt(Telefone)
        }
        catch{
            return "formato de telefone invalido"
        }
        if(User.Senha.toString().length<6){
            return "Senha muito pequena"
        }
        let h = parseInt(User.Senha)
        if(h.toString().length=== User.Senha.toString().length){
            return "A senha deve conter letras e numeros"
        }
        try {
            await Usuarios.update(
                {
                    FirstName:FirstName, LastName:LastName, Senha:md5(User.Senha), Endereco:Endereco, DataDeNascimento:dataDeNascimento, Telefone:telefone
                }, {
                where: {
                    idUsuario: User.idUsuario
                }
            })
            return "Sucesso"
        }
        catch (exception: any) {
            return exception.message
        }
    }
    AlterarNome = async (Email: String, Senha: String, NovoNome: String) => {
        try {
            await Usuarios.update({ Nome: NovoNome }, {
                where: {
                    Email: Email,
                    Senha: md5(Senha)
                }
            })
            return "Nome alterado"
        }
        catch {
            return "Algo deu errado"
        }
    }
    EsqueceuSenhaRedefinirSenha = async (Email: String, Senha: String, NovaSenha: string) => {
        if(NovaSenha.length<6){
            return "Senha muito pequena"
        }
        let h = parseInt(NovaSenha)
        if(h.toString().length=== NovaSenha.toString().length){
            return "A senha deve conter letras e numeros"
        }
        try {
            console.log(NovaSenha)
            await Usuarios.update({ Senha: md5(NovaSenha) }, {
                where: {
                    Email: Email,
                    Senha: Senha
                }
            })
            return "Senha alterada"
        }
        catch (exception: any) {
            console.log(exception.message)
            return "Não foi possivel alterar a senha"
        }
    }
    AlterarSenha = async (Email: String, Senha: String, NovaSenha: string) => {
        if(NovaSenha.length<6){
            return "Senha muito pequena"
        }
        let h = parseInt(NovaSenha)
        if(h.toString().length=== NovaSenha.toString().length){
            return "A senha deve conter letras e numeros"
        }
        try {
            await Usuarios.update({ Senha: md5(NovaSenha) }, {
                where: {
                    Email: Email,
                    Senha: md5(Senha)
                }
            })
            return "Senha alterada"
        }
        catch (exception: any) {
            console.log(exception.message)
            return "Não foi possivel alterar a senha"
        }
    }
    AlterarEndereco = async (Email: String, Senha: String, Endereco: String) => {
        try {
            await Usuarios.update({ Endereco: Endereco }, {
                where: {
                    Email: Email,
                    Senha: md5(Senha)
                }
            })
            return "Endereço alterado"
        }
        catch {
            return "Não foi possivel alterar o Endereço"
        }
    }
    AlterarDataDeNacimento = async (Email: String, Senha: String, DataDeNascimento: Date) => {
        try {
            await Usuarios.update({ DataDeNascimento: DataDeNascimento }, {
                where: {
                    Email: Email,
                    Senha: md5(Senha)
                }
            })
            return "Data de nascimento alterada"
        }
        catch {
            return "Não foi possivel alterar a data de nascimento"
        }
    }

}
