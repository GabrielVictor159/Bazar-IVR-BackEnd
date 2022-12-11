import Admin from "../models/Admin";
var md5 = require('md5');
export default async function VerificarAdmin(NomeAdmin:String, SenhaAdmin:String){
    const buscaAdmin = await Admin.findOne({
        where:{
            Nome:NomeAdmin,
            Senha:md5(SenhaAdmin)
        }
    })
    if(buscaAdmin==null){
        return false
    }
    else{
        return true
    }
}