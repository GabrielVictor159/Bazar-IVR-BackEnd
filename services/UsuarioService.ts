import UsuarioDTO from "../dto/UsuarioDTO";
import Usuarios from "../models/Usuarios";
import { keyApiCPF } from "../apikey";
var md5 = require('md5');
export class UsuarioService{
    constructor(){}

    Cadastrar = async(CPF:string, Senha:String, endereco:String,  Email:String, Telefone:number)=>{
        let dados:any;

               console.log(dados)
            try{
                let dto = new UsuarioDTO(dados.cpf, dados.nome, Senha, endereco, dados.nascimento, Email, Telefone)
                    
                   await  Usuarios.create({CPF:dto.getCPF(),Nome:dto.getNome(), Senha:dto.getSenha(), Endereco:dto.getEndereco(), DataDeNascimento:dto.getDataDeNascimento(), Email:dto.getEmail(), Telefone: dto.getTelefone()})
                    return "usuario criado"
                
            }
            catch(exception:any){
                return `Error: ${exception.message}`
            }
        
    
        
        }
  
       
    

    Logar = async(Email:String, Senha:String)=>{
        let senha = md5(Senha)
        const busca = await Usuarios.findOne({where:{Email:Email, Senha:senha}})
        if(busca===null){
            return "Usuario não encontrado"
        }
        else{
            return busca
        }

    }
    AlterarNome = async(Email:String, Senha:String, NovoNome:String)=>{
        try{
        await Usuarios.update({Nome:NovoNome},{
            where:{
                Email:Email,
                Senha: md5(Senha)
            }
        })
        return "Nome alterado"
    }
    catch{
        return "Algo deu errado"
    }
    }
    AlterarSenha = async(Email:String, Senha:String, NovaSenha:String)=>{
        try{
            await Usuarios.update({Senha:md5(NovaSenha)},{
                where:{
                    Email:Email,
                    Senha:md5(Senha)
                }
            })
            return "Senha alterada"
        }
        catch{
            return "Não foi possivel alterar a senha"
        }
    }
    AlterarEndereco = async(Email:String, Senha:String , Endereco:String)=>{
        try{
            await Usuarios.update({Endereco:Endereco},{
                where:{
                    Email:Email,
                    Senha:md5(Senha)
                }
            })
            return "Endereço alterado"
        }
        catch{
            return "Não foi possivel alterar o Endereço"
        }
    }
    AlterarDataDeNacimento = async(Email:String, Senha:String, DataDeNascimento:Date)=>{
        try{
            await Usuarios.update({DataDeNascimento:DataDeNascimento},{
                where:{
                    Email:Email,
                    Senha:md5(Senha)
                }
            })
            return "Data de nascimento alterada"
        }
        catch{
            return "Não foi possivel alterar a data de nascimento"
        }
    }

}
