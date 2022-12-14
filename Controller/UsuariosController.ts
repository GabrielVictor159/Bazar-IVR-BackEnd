import express from 'express';
import Keys from '../Keys';
const UsuarioController = express.Router();
import { UsuarioService } from '../services/UsuarioService';
const usuarioService = new UsuarioService();


UsuarioController.get('/Usuarios/:Email/:Senha', async(req,res)=>{
    const Login = await usuarioService.Logar(req.params.Email, req.params.Senha);
    res.send(Login)
})

UsuarioController.get('/UsuariosConfirmar/:idSolicitacao', async(req,res)=>{
    const Cadastro = await usuarioService.Cadastrar(parseInt(req.params.idSolicitacao));
    if(Cadastro ==="Usuario Criado"){
        res.redirect(Keys.linkFront+"SucessoRegistrar")
    }
    else{
        res.send("Houve algum erro")
    }
})
UsuarioController.put('/Usuarios', async(req, res)=>{
    try{
    const resposta = await usuarioService.PutUser(req.body)
    res.send(resposta)
    }
    catch(exception:any){
        console.log(exception.message);
        res.send('Houve um erro')

    }
   
})
UsuarioController.put('/UsuariosEsqueceuSenhaAlterarSenha', async(req, res)=>{
    const EsqueceuSenhaAlterarSenha = await usuarioService.EsqueceuSenhaRedefinirSenha(req.body.Email, req.body.Senha, req.body.NovaSenha)
    res.send(EsqueceuSenhaAlterarSenha)
})
UsuarioController.put('/UsuariosAlterarNome', async(req,res)=>{
    const AlterarNome = await usuarioService.AlterarNome(req.body.Email,req.body.Senha, req.body.NovoNome)
    res.send(AlterarNome)
})
UsuarioController.put('/UsuariosAlterarSenha', async(req,res)=>{
    const AlterarSenha = await usuarioService.AlterarSenha(req.body.Email,req.body.Senha, req.body.NovaSenha)
    res.send(AlterarSenha)
})
UsuarioController.put('/UsuariosAlterarEndereco', async(req,res)=>{
    const AlterarEndereco = await usuarioService.AlterarEndereco(req.body.Email,req.body.Senha, req.body.NovoEndereco)
    res.send(AlterarEndereco)
})
UsuarioController.put('/UsuariosAlterarDataDeNascimento', async(req,res)=>{
    const AlterarDataDeNacimento = await usuarioService.AlterarDataDeNacimento(req.body.Email,req.body.Senha, req.body.NovaDataDeNascimento)
    res.send(AlterarDataDeNacimento)
})

export default UsuarioController;

