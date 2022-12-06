import { AdminDTO } from "../dto/AdminDTO.js";
const db = require('./Infra/DB')
const admin = require('./models/Admin')
export class AdminService{
    constructor(){}
    public Login(Nome:String, Senha:String){
        try{
            let dto = new AdminDTO(Nome, Senha);
            const busca = admin.findOne({where:{Nome: dto.getNome, Senha: dto.getSenha}})
            if(busca===null){
                return "Usuario ou Senhas não encontradas"
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
