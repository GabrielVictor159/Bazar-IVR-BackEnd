import express from 'express';
import { json } from 'sequelize';
import { ImageService } from '../services/ImageService';
import VerificarAdmin from '../services/VerificarAdmin';
var md5 = require('md5');
const imageService = new ImageService();
const ImageController = express.Router();

ImageController.post('/images/:NomeAdmin/:SenhaAdmin', (req:any, res:any) => {
    try{
    imageService.saveImage(req, res)
    res.redirect("/")
    }
    catch(err:any){
      console.log(err.message)
      res.sendStatus(500)
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