import SolicitacoesUsuarios from "../models/SolicitacoesUsuarios";
import { UsuarioService } from "./UsuarioService";
import Usuarios from "../models/Usuarios";
import VerificarAdmin from "./VerificarAdmin";
import Keys from "../Keys";
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
    if (await this.verificarEmail(Email) === false) {
      return false
    }
    const idSolicitacao = Math.floor(Math.random() * 9999);
    console.log(idSolicitacao)
    var newDate = new Date();
    let busca = this.findByEmail(Keys.Admin, Keys.SenhaAdmin, Email);
    if (await busca !== 1) {
      return false
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
          // try{
          //   await transporter.sendMail( {
          //       from: 'gabrielvictor159487@gmail.com',
          //       to: `${Email}`,
          //       subject: 'Sending Email using Node.js',
          //       text: 'That was easy!',
          //       html:emailLayout(solicitacao.idSolicitacao)
          //     });
          //   }
          //   catch(exception:any){
          //       console.log(exception.message)
          //       return false;
          //   }
        }
        catch (exception: any) {
          return exception.message
        }
      }
      else {
        return false


      }
    }
  }
  verificarEmail = async (Email: String) => {

    let busca: any = false;

    const axios = require("axios");

    const encodedParams = new URLSearchParams();
    encodedParams.append("email", `${Email}`);

    const options = {
      method: 'POST',
      url: 'https://community-neutrino-email-validate.p.rapidapi.com/email-validate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': Keys.ApiEmailKey,
        'X-RapidAPI-Host': 'community-neutrino-email-validate.p.rapidapi.com'
      },
      data: encodedParams
    };

   await axios.request(options).then(function (response:any) {
      busca=true;
    }).catch(function (error:any) {
      console.error(error);
    });
    if (busca) {
      return true
    }
    else {
      return false
    }
  }
  findByid = async (id: number) => {
    return await SolicitacoesUsuarios.findByPk(id)

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