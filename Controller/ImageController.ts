import express from 'express';
import { json } from 'sequelize';
import { ImageService } from '../services/ImageService';
const imageService = new ImageService();
const ImageController = express.Router();

ImageController.post('/images', (req, res, next) => {
   
     const resposta =  imageService.saveImage(req)

     res.send("sucesso")
     res.end();
   
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