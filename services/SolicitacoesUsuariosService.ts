import SolicitacoesUsuarios from "../models/SolicitacoesUsuarios";
import { UsuarioService } from "./UsuarioService";
import Usuarios from "../models/Usuarios";
import VerificarAdmin from "./VerificarAdmin";
import Keys from "../Keys";
import { response } from "express";
const emailLayout = require('../config/EmailLayout.js');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabrielvictor159487@gmail.com',
    pass: 'sbizodkriyajhmsv'
  }
});


export class SolicitacoesUsuariosService {
  constructor() { }

  criarSolicitacao = async (FirstName: String, LastName: String, Senha: String, Endereco: String, DataDeNascimento: Date, Email: String, Telefone: number) => {
  
    const idSolicitacao = Math.floor(Math.random() * 9999);
    console.log(idSolicitacao)
    var newDate = new Date();
    let busca = this.findByEmail(Keys.Admin, Keys.SenhaAdmin, Email);
    if (await busca !== 1) {
      return "Ja existe um usuario com esse email"
    }
    else {
      let busca2 = await SolicitacoesUsuarios.findOne({
        where: {
          Email: Email
        }
      })
      if (busca2 === null) {
        try {
          const solicitacao = await SolicitacoesUsuarios.create({idSolicitacao:idSolicitacao, FirstName: FirstName, LastName: LastName, Senha: Senha, Endereco: Endereco, DataDeNascimento: DataDeNascimento, Email: Email, Telefone: Telefone, DataDeCriacao: newDate });
          try{
            const url = Keys.link + `UsuariosConfirmar/${idSolicitacao}`
            const titulo = "Confirme a criação da sua conta"
            const texto = "Bom dia, foi feito uma solicitação de criação de usuario no nosso site com o seu email, por favor se foi você confirme a inscrição clicando no botão abaixo, caso não tenha sido você por favor ignore esse email."
            await transporter.sendMail( {
                from: 'gabrielvictor159487@gmail.com',
                to: `${Email}`,
                subject: 'Confirmar inscrição',
                text: '',
                html:emailLayout(url,titulo, texto)
              });
              return "Sucesso"
            }
            catch(exception:any){
              this.deletarSolicitacao(idSolicitacao)
                if(exception.message === "No recipients defined"){
                  return "Email invalido"
                }
                else{
                  return "Houve um erro"
                }
            }
        
        }
        catch (exception: any) {
          return exception.message
        }
      }
      else {
        return "Ja existe uma solicitação de criação de usuario com esse email"


      }
    }
  }
  
  findByid = async (id: number) => {
    return await SolicitacoesUsuarios.findByPk(id)

  }
  esqueceuSenha = async(email: String) =>{
    let busca = await this.findByEmail(Keys.Admin, Keys.SenhaAdmin, email);
    if (await busca === 1) {
      return "Não existe um usuario com esse email"
    }
    else{
      
      try{
        const url = Keys.linkFront + `RedefinirSenha/${busca.Email}/${busca.Senha}`
        const titulo = "Alteração de Senha"
        const texto = "Bom dia, foi feito uma tentativa de login na sua conta através do método esqueceu senha, se foi você por favor clique no botão para alterar a sua senha."
        await transporter.sendMail( {
            from: 'gabrielvictor159487@gmail.com',
            to: `${busca.Email}`,
            subject: 'Esqueceu Senha',
            text: '',
            html:emailLayout(url,titulo, texto)
          });
          return "Sucesso"
      }
      catch(exception:any){
        return "Houve um erro"
      }
  
    }
  }
  deletarSolicitacao = async (id: number) => {
    try {
      await SolicitacoesUsuarios.destroy({
        where: {
          idSolicitacao: id
        }
      })
      return "Solicitação excluida"
    }
    catch (exception: any) {
      return exception.message
    }
  }
  findByEmail = async(NomeAdmin:String, SenhaAdmin:String, Email:String)=>{
    if(await VerificarAdmin(NomeAdmin, SenhaAdmin)){
     const busca = await Usuarios.findOne({
         where:{
             Email:Email
         }
     })
     if(busca===null){
         return 1
     }
     else{
         return busca
     }
    }
    else{
     return 0
    }
 }
}
// teste