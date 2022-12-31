import express from 'express';
import { json } from 'sequelize';
import { ImageService } from '../services/ImageService';
import VerificarAdmin from '../services/VerificarAdmin';

const imageService = new ImageService();
const ImageController = express.Router();

ImageController.post('/images/:NomeAdmin/:SenhaAdmin', async(req, res, next) => {
console.log(req)
if(req.params.NomeAdmin ==="gabriel" && req.params.SenhaAdmin ==="159487"){
const resposta = await imageService.saveImage(req)
res.send("sucesso")
res.end();
}
else{
res.send("Senha de Administrador errada")
res.end();
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
});

export default ImageController;

function req(req: any) {
  throw new Error('Function not implemented.');
}
