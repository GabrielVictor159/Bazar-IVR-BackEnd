import express from 'express';
import { json } from 'sequelize';
import { ImageService } from '../services/ImageService';
import VerificarAdmin from '../services/VerificarAdmin';
var md5 = require('md5');
const imageService = new ImageService();
const ImageController = express.Router();

ImageController.post('/images/:NomeAdmin/:SenhaAdmin', (req:any, res:any) => {
  const buscaAdmin = VerificarAdmin(req.params.NomeAdmin, req.params.SenhaAdmin)
  console.log(buscaAdmin)
    if(buscaAdmin===false){
      res.send("Senha de Administrador errada")
 
    }
    else{
    const resposta = imageService.saveImage(req)

      res.send(resposta)
  
    }
  

  });
  ImageController.delete('/images/:name', (req, res)=>{
    const resposta = imageService.deleteImage(req.params.name)
    if( resposta===false){
        res.send("houve um erro")
        res.end()
    }
    else{
        res.send(resposta)
        res.end();
    }
  })
export default ImageController