import  AdminDTO  from "../dto/AdminDTO.js";
import  db  from "../Infra/DB.js";
import admin  from '../models/Admin.js';
export class AdminService{
    constructor(){}

    Login = async(Nome:String, Senha:String)=>{
        
        try{
            let dto = new AdminDTO(Nome, Senha);
            let nome = dto.getNome();
            let senha = dto.getSenha();
            const busca = await admin.findOne({where:{Nome: nome, Senha: senha}})
            if(busca===null){
                return "Usuario ou senha errados"
            }
            else{
                return busca
            }
        }
        catch{
            return "Por favor informe valores validos"
        }
    }


}
