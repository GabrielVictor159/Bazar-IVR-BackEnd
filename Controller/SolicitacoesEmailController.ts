import express from 'express';
const SolicitacoesEmailController = express.Router();
import { SolicitacoesUsuariosService } from '../services/SolicitacoesUsuariosService';
const solicitacoesUsuariosService = new SolicitacoesUsuariosService();
SolicitacoesEmailController.post("/CadastrarSolicitacao", async (req, res)=>{
    try{
   const resposta = solicitacoesUsuariosService.criarSolicitacao(req.body.FirstName, req.body.LastName,req.body.Senha, req.body.Endereco, req.body.DataDeNascimento,  req.body.Email, req.body.Telefone);
    res.send(await resposta)
    }
    catch(exception:any){
        console.log(exception.message)
        res.send("Houve um erro")
    }
})

export default SolicitacoesEmailController;