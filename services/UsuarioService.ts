import UsuarioDTO from "../dto/UsuarioDTO";
import Usuarios from "../models/Usuarios";
var md5 = require('md5');
export class UsuarioService{
    constructor(){}

    Cadastrar = async(CPF:number, Nome:String, Senha:String, endereco:String, DataDeNascimento:Date)=>{
        console.log("acessou o método")
        let res:any
            try{
                let dto = new UsuarioDTO(CPF, Nome, Senha, endereco, DataDeNascimento)
                    
                   await  Usuarios.create({CPF:dto.getCPF(),Nome:dto.getNome(), Senha:dto.getSenha(), Endereco:dto.getEndereco(), DataDeNascimento:dto.getDataDeNascimento()})
                    return "usuario criado"
                
            }
            catch(exception:any){
                return `Error: ${exception.message}`
            }
        }
  
       
    

    Logar = async(CPF:number, Senha:String)=>{
        let senha = md5(Senha)
        const busca = await Usuarios.findOne({where:{CPF:CPF, Senha:senha}})
        if(busca===null){
            return "Usuario não encontrado"
        }
        else{
            return busca
        }

    }
    AlterarNome = async(CPF:number, Senha:String, NovoNome:String)=>{
        try{
        await Usuarios.update({Nome:NovoNome},{
            where:{
                CPF:CPF,
                Senha: md5(Senha)
            }
        })
        return "Nome alterado"
    }
    catch{
        return "Algo deu errado"
    }
    }
    AlterarSenha = async(CPF:number, Senha:String, NovaSenha:String)=>{
        try{
            await Usuarios.update({Senha:md5(NovaSenha)},{
                where:{
                    CPF:CPF,
                    Senha:md5(Senha)
                }
            })
            return "Senha alterada"
        }
        catch{
            return "Não foi possivel alterar a senha"
        }
    }
    AlterarEndereco = async(CPF:number, Senha:String , Endereco:String)=>{
        try{
            await Usuarios.update({Endereco:Endereco},{
                where:{
                    CPF:CPF,
                    Senha:md5(Senha)
                }
            })
            return "Endereço alterado"
        }
        catch{
            return "Não foi possivel alterar o Endereço"
        }
    }
    AlterarDataDeNacimento = async(CPF:number, Senha:String, DataDeNascimento:Date)=>{
        try{
            await Usuarios.update({DataDeNascimento:DataDeNascimento},{
                where:{
                    CPF:CPF,
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
