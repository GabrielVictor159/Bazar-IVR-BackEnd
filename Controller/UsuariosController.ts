import express from 'express';
const UsuarioController = express.Router();
import { UsuarioService } from '../services/UsuarioService';
const usuarioService = new UsuarioService();


UsuarioController.get('/Usuarios', async(req,res)=>{
    const Login = await usuarioService.Logar(req.body.CPF, req.body.Senha);
    res.send(Login)
})

UsuarioController.post('/Usuarios', async(req,res)=>{
    const Cadastro = await usuarioService.Cadastrar(req.body.CPF,req.body.Nome, req.body.Senha, req.body.Endereco,req.body.DataDeNascimento);
    res.send(Cadastro)
})

UsuarioController.put('/UsuariosAlterarNome', async(req,res)=>{
    const AlterarNome = await usuarioService.AlterarNome(req.body.CPF,req.body.Senha, req.body.NovoNome)
    res.send(AlterarNome)
})
UsuarioController.put('/UsuariosAlterarSenha', async(req,res)=>{
    const AlterarSenha = await usuarioService.AlterarSenha(req.body.CPF,req.body.Senha, req.body.NovaSenha)
    res.send(AlterarSenha)
})
UsuarioController.put('/UsuariosAlterarEndereco', async(req,res)=>{
    const AlterarEndereco = await usuarioService.AlterarEndereco(req.body.CPF,req.body.Senha, req.body.NovoEndereco)
    res.send(AlterarEndereco)
})
UsuarioController.put('/UsuariosAlterarDataDeNascimento', async(req,res)=>{
    const AlterarDataDeNacimento = await usuarioService.AlterarDataDeNacimento(req.body.CPF,req.body.Senha, req.body.NovaDataDeNascimento)
    res.send(AlterarDataDeNacimento)
})

export default UsuarioController;

