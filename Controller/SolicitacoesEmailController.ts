import express from 'express';
const SolicitacoesEmailController = express.Router();
import { SolicitacoesUsuariosService } from '../services/SolicitacoesUsuariosService';
const solicitacoesUsuariosService = new SolicitacoesUsuariosService();
SolicitacoesEmailController.post("/CadastrarSolicitacao", async (req, res)=>{
    try{
    solicitacoesUsuariosService.criarSolicitacao(req.body.FirstName, req.body.LastName,req.body.Senha, req.body.Endereco, req.body.DataDeNascimento,  req.body.Email, req.body.Telefone);
    }
    catch(exception:any){
        console.log(exception.message)
    }
})

export default SolicitacoesEmailController;