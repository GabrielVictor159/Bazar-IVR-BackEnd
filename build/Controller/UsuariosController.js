"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Keys_1 = __importDefault(require("../Keys"));
const UsuarioController = express_1.default.Router();
const UsuarioService_1 = require("../services/UsuarioService");
const usuarioService = new UsuarioService_1.UsuarioService();
UsuarioController.get('/Usuarios/:Email/:Senha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Login = yield usuarioService.Logar(req.params.Email, req.params.Senha);
    res.send(Login);
}));
UsuarioController.get('/UsuariosConfirmar/:idSolicitacao', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Cadastro = yield usuarioService.Cadastrar(parseInt(req.params.idSolicitacao));
    if (Cadastro === "Usuario Criado") {
        res.redirect(Keys_1.default.linkFront + "/SucessoRegistrar");
    }
    else {
        res.send("Houve algum erro");
    }
}));
UsuarioController.put('/Usuarios', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resposta = yield usuarioService.PutUser(req.body);
        res.send(resposta);
    }
    catch (exception) {
        console.log(exception.message);
        res.send('Houve um erro');
    }
}));
UsuarioController.put('/UsuariosEsqueceuSenhaAlterarSenha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const EsqueceuSenhaAlterarSenha = yield usuarioService.EsqueceuSenhaRedefinirSenha(req.body.Email, req.body.Senha, req.body.NovaSenha);
    res.send(EsqueceuSenhaAlterarSenha);
}));
UsuarioController.put('/UsuariosAlterarNome', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AlterarNome = yield usuarioService.AlterarNome(req.body.Email, req.body.Senha, req.body.NovoNome);
    res.send(AlterarNome);
}));
UsuarioController.put('/UsuariosAlterarSenha', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AlterarSenha = yield usuarioService.AlterarSenha(req.body.Email, req.body.Senha, req.body.NovaSenha);
    res.send(AlterarSenha);
}));
UsuarioController.put('/UsuariosAlterarEndereco', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AlterarEndereco = yield usuarioService.AlterarEndereco(req.body.Email, req.body.Senha, req.body.NovoEndereco);
    res.send(AlterarEndereco);
}));
UsuarioController.put('/UsuariosAlterarDataDeNascimento', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AlterarDataDeNacimento = yield usuarioService.AlterarDataDeNacimento(req.body.Email, req.body.Senha, req.body.NovaDataDeNascimento);
    res.send(AlterarDataDeNacimento);
}));
exports.default = UsuarioController;
//# sourceMappingURL=UsuariosController.js.map