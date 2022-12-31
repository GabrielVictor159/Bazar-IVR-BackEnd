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
exports.UsuarioService = void 0;
const UsuarioDTO_1 = __importDefault(require("../dto/UsuarioDTO"));
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const SolicitacoesUsuariosService_1 = require("./SolicitacoesUsuariosService");
var md5 = require('md5');
const solicitacoesUsuarios = new SolicitacoesUsuariosService_1.SolicitacoesUsuariosService();
class UsuarioService {
    constructor() {
        this.Cadastrar = (idSolicitacao) => __awaiter(this, void 0, void 0, function* () {
            const buscaSolicitacao = yield solicitacoesUsuarios.findByid(idSolicitacao);
            console.log(buscaSolicitacao);
            try {
                let dto = new UsuarioDTO_1.default(buscaSolicitacao.dataValues.FirstName, buscaSolicitacao.dataValues.LastName, buscaSolicitacao.dataValues.Senha, buscaSolicitacao.dataValues.Endereco, buscaSolicitacao.dataValues.DataDeNascimento, buscaSolicitacao.dataValues.Email, buscaSolicitacao.dataValues.Telefone);
                yield Usuarios_1.default.create({ FirstName: dto.getFirstName(), LastName: dto.getLastName(), Senha: dto.getSenha(), Endereco: dto.getEndereco(), DataDeNascimento: dto.getDataDeNascimento(), Email: dto.getEmail(), Telefone: dto.getTelefone() });
                try {
                    yield solicitacoesUsuarios.deletarSolicitacao(buscaSolicitacao.dataValues.idSolicitacao);
                    return "Usuario Criado";
                }
                catch (exception) {
                    return `Error: ${exception.message}`;
                }
            }
            catch (exception) {
                return `Error: ${exception.message}`;
            }
        });
        this.Logar = (Email, Senha) => __awaiter(this, void 0, void 0, function* () {
            let senha = md5(Senha);
            const busca = yield Usuarios_1.default.findOne({ where: { Email: Email, Senha: senha } });
            if (busca === null) {
                return "Usuario não encontrado";
            }
            else {
                busca.Senha = Senha;
                return busca;
            }
        });
        this.PutUser = (User) => __awaiter(this, void 0, void 0, function* () {
            const { FirstName, LastName, Endereco, Telefone } = User;
            if (FirstName.toString().length < 7) {
                return "Primeiro nome muito pequeno, escreva um nome com pelo menos 7 digitos";
            }
            if (LastName.toString().length < 7) {
                return "Ultimo nome muito pequeno, escreva um nome com pelo menos 7 digitos";
            }
            if (Endereco.toString().length < 7) {
                return "Por favor insira um Endereco valido";
            }
            let dataDeNascimento = User.DataDeNascimento;
            try {
                dataDeNascimento = new Date(User.DataDeNascimento);
            }
            catch (_a) {
                return "Data de nascimento invalida";
            }
            if (Telefone.toString().length !== 11) {
                return "Telefone invalido";
            }
            let telefone;
            try {
                telefone = parseInt(Telefone);
            }
            catch (_b) {
                return "formato de telefone invalido";
            }
            if (User.Senha.toString().length < 6) {
                return "Senha muito pequena";
            }
            let h = parseInt(User.Senha);
            if (h.toString().length === User.Senha.toString().length) {
                return "A senha deve conter letras e numeros";
            }
            try {
                yield Usuarios_1.default.update({
                    FirstName: FirstName, LastName: LastName, Senha: md5(User.Senha), Endereco: Endereco, DataDeNascimento: dataDeNascimento, Telefone: telefone
                }, {
                    where: {
                        idUsuario: User.idUsuario
                    }
                });
                return "Sucesso";
            }
            catch (exception) {
                return exception.message;
            }
        });
        this.AlterarNome = (Email, Senha, NovoNome) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Usuarios_1.default.update({ Nome: NovoNome }, {
                    where: {
                        Email: Email,
                        Senha: md5(Senha)
                    }
                });
                return "Nome alterado";
            }
            catch (_c) {
                return "Algo deu errado";
            }
        });
        this.EsqueceuSenhaRedefinirSenha = (Email, Senha, NovaSenha) => __awaiter(this, void 0, void 0, function* () {
            if (NovaSenha.length < 6) {
                return "Senha muito pequena";
            }
            let h = parseInt(NovaSenha);
            if (h.toString().length === NovaSenha.toString().length) {
                return "A senha deve conter letras e numeros";
            }
            try {
                console.log(NovaSenha);
                yield Usuarios_1.default.update({ Senha: md5(NovaSenha) }, {
                    where: {
                        Email: Email,
                        Senha: Senha
                    }
                });
                return "Senha alterada";
            }
            catch (exception) {
                console.log(exception.message);
                return "Não foi possivel alterar a senha";
            }
        });
        this.AlterarSenha = (Email, Senha, NovaSenha) => __awaiter(this, void 0, void 0, function* () {
            if (NovaSenha.length < 6) {
                return "Senha muito pequena";
            }
            let h = parseInt(NovaSenha);
            if (h.toString().length === NovaSenha.toString().length) {
                return "A senha deve conter letras e numeros";
            }
            try {
                yield Usuarios_1.default.update({ Senha: md5(NovaSenha) }, {
                    where: {
                        Email: Email,
                        Senha: md5(Senha)
                    }
                });
                return "Senha alterada";
            }
            catch (exception) {
                console.log(exception.message);
                return "Não foi possivel alterar a senha";
            }
        });
        this.AlterarEndereco = (Email, Senha, Endereco) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Usuarios_1.default.update({ Endereco: Endereco }, {
                    where: {
                        Email: Email,
                        Senha: md5(Senha)
                    }
                });
                return "Endereço alterado";
            }
            catch (_d) {
                return "Não foi possivel alterar o Endereço";
            }
        });
        this.AlterarDataDeNacimento = (Email, Senha, DataDeNascimento) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Usuarios_1.default.update({ DataDeNascimento: DataDeNascimento }, {
                    where: {
                        Email: Email,
                        Senha: md5(Senha)
                    }
                });
                return "Data de nascimento alterada";
            }
            catch (_e) {
                return "Não foi possivel alterar a data de nascimento";
            }
        });
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=UsuarioService.js.map