import Admin from "../models/Admin";
var md5 = require('md5');
export default  function VerificarAdmin(NomeAdmin:String, SenhaAdmin:String){
    try{
    const buscaAdmin =  Admin.findOne({
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
catch(exception:any){
    console.log(exception.message)
}
}