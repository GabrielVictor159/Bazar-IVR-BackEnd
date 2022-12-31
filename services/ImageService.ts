import formidable, {errors as formidableErrors} from 'formidable'
var fs = require('fs');
export class ImageService{
    constructor(){}

    saveImage = async(req:any, res:any)=>{
        let resposta:any;
        var form = new formidable.IncomingForm({
            uploadDir:"/app/images",
            multiples: true,
            keepExtensions:true,
            filename(name, ext, part, form) {
                return name + ".png"
            },
        });
        
        form.parse(req, (err, fields, files) =>{
            
            if(err){
              resposta = JSON.stringify({
                    result: "failed",
                    message: `Não foi possivel salvar, Error: ${err}`
                })
            }
            else{
               resposta = JSON.stringify({
                result: "sucesso",
                message: `o arquivo foi salvo`
            })
            }
        
        })
        res.send(resposta)
    }
    deleteImage =  (name:any)=>{
        const path = `/app/images/${name}.png`
        let resposta:boolean = true;
      fs.unlink(path, (err:any)=>{
            if(err){
                console.log(err)
                resposta = err
            }
            
        })
        return resposta
    }
}