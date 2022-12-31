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
exports.SolicitacoesUsuariosService = void 0;
const SolicitacoesUsuarios_1 = __importDefault(require("../models/SolicitacoesUsuarios"));
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const VerificarAdmin_1 = __importDefault(require("./VerificarAdmin"));
const Keys_1 = __importDefault(require("../Keys"));
const emailLayout = require('../config/EmailLayout.js');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gabrielvictor159487@gmail.com',
        pass: 'sbizodkriyajhmsv'
    }
});
class SolicitacoesUsuariosService {
    constructor() {
        this.criarSolicitacao = (FirstName, LastName, Senha, Endereco, DataDeNascimento, Email, Telefone) => __awaiter(this, void 0, void 0, function* () {
            const idSolicitacao = Math.floor(Math.random() * 9999);
            console.log(idSolicitacao);
            var newDate = new Date();
            let busca = this.findByEmail(Keys_1.default.Admin, Keys_1.default.SenhaAdmin, Email);
            if ((yield busca) !== 1) {
                return "Ja existe um usuario com esse email";
            }
            else {
                let busca2 = yield SolicitacoesUsuarios_1.default.findOne({
                    where: {
                        Email: Email
                    }
                });
                if (busca2 === null) {
                    try {
                        const solicitacao = yield SolicitacoesUsuarios_1.default.create({ idSolicitacao: idSolicitacao, FirstName: FirstName, LastName: LastName, Senha: Senha, Endereco: Endereco, DataDeNascimento: DataDeNascimento, Email: Email, Telefone: Telefone, DataDeCriacao: newDate });
                        try {
                            const url = Keys_1.default.link + `UsuariosConfirmar/${idSolicitacao}`;
                            const titulo = "Confirme a criação da sua conta";
                            const texto = "Bom dia, foi feito uma solicitação de criação de usuario no nosso site com o seu email, por favor se foi você confirme a inscrição clicando no botão abaixo, caso não tenha sido você por favor ignore esse email.";
                            yield transporter.sendMail({
                                from: 'gabrielvictor159487@gmail.com',
                                to: `${Email}`,
                                subject: 'Confirmar inscrição',
                                text: '',
                                html: emailLayout(url, titulo, texto)
                            });
                            return "Sucesso";
                        }
                        catch (exception) {
                            this.deletarSolicitacao(idSolicitacao);
                            if (exception.message === "No recipients defined") {
                                return "Email invalido";
                            }
                            else {
                                return "Houve um erro";
                            }
                        }
                    }
                    catch (exception) {
                        return exception.message;
                    }
                }
                else {
                    return "Ja existe uma solicitação de criação de usuario com esse email";
                }
            }
        });
        this.findByid = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield SolicitacoesUsuarios_1.default.findByPk(id);
        });
        this.esqueceuSenha = (email) => __awaiter(this, void 0, void 0, function* () {
            let busca = yield this.findByEmail(Keys_1.default.Admin, Keys_1.default.SenhaAdmin, email);
            if ((yield busca) === 1) {
                return "Não existe um usuario com esse email";
            }
            else {
                try {
                    const url = Keys_1.default.linkFront + `RedefinirSenha/${busca.Email}/${busca.Senha}`;
                    const titulo = "Alteração de Senha";
                    const texto = "Bom dia, foi feito uma tentativa de login na sua conta através do método esqueceu senha, se foi você por favor clique no botão para alterar a sua senha.";
                    yield transporter.sendMail({
                        from: 'gabrielvictor159487@gmail.com',
                        to: `${busca.Email}`,
                        subject: 'Esqueceu Senha',
                        text: '',
                        html: emailLayout(url, titulo, texto)
                    });
                    return "Sucesso";
                }
                catch (exception) {
                    return "Houve um erro";
                }
            }
        });
        this.deletarSolicitacao = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield SolicitacoesUsuarios_1.default.destroy({
                    where: {
                        idSolicitacao: id
                    }
                });
                return "Solicitação excluida";
            }
            catch (exception) {
                return exception.message;
            }
        });
        this.findByEmail = (NomeAdmin, SenhaAdmin, Email) => __awaiter(this, void 0, void 0, function* () {
            if (yield (0, VerificarAdmin_1.default)(NomeAdmin, SenhaAdmin)) {
                const busca = yield Usuarios_1.default.findOne({
                    where: {
                        Email: Email
                    }
                });
                if (busca === null) {
                    return 1;
                }
                else {
                    return busca;
                }
            }
            else {
                return 0;
            }
        });
    }
}
exports.SolicitacoesUsuariosService = SolicitacoesUsuariosService;
// teste
//# sourceMappingURL=SolicitacoesUsuariosService.js.map