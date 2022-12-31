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
exports.ProdutoService = void 0;
const ProdutoDTO_1 = __importDefault(require("../dto/ProdutoDTO"));
const Keys_1 = __importDefault(require("../Keys"));
const Admin_1 = __importDefault(require("../models/Admin"));
const Produto_1 = __importDefault(require("../models/Produto"));
const { Op } = require("sequelize");
var md5 = require('md5');
class ProdutoService {
    constructor() {
        this.adicionarLinkImage = (req) => __awaiter(this, void 0, void 0, function* () {
            let vetor = req;
            if (vetor.length === undefined) {
                vetor = {
                    idProduto: req.idProduto,
                    Nome: req.Nome,
                    Descricao: req.Descricao,
                    Quantidade: req.Quantidade,
                    NomeImage: req.NomeImage,
                    Valor: req.Valor,
                    LinkImage: Keys_1.default.link + "images/" + vetor.NomeImage + ".png"
                };
                return vetor;
            }
            else {
                for (let i = 0; i < vetor.length; i++) {
                    vetor[i] = {
                        idProduto: req[i].idProduto,
                        Nome: req[i].Nome,
                        Descricao: req[i].Descricao,
                        Quantidade: req[i].Quantidade,
                        NomeImage: req[i].NomeImage,
                        Valor: req[i].Valor,
                        LinkImage: Keys_1.default.link + "images/" + vetor[i].NomeImage + ".png"
                    };
                }
                return vetor;
            }
        });
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findAll();
            if (busca === null) {
                return "Sem produtos";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.findAllLazyLoading = (index, size) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findAll({
                offset: index,
                limit: size
            });
            return this.adicionarLinkImage(busca);
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findByPk(id);
            if (busca === null) {
                return "Não existe esse produto";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.findByName = (Nome) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findOne({
                where: {
                    Nome: Nome
                }
            });
            if (busca === null) {
                return "Não existe esse produto";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.findAllAtMaxValue = (MaxValor) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findAll({
                where: {
                    Valor: { [Op.lte]: MaxValor }
                }
            });
            if (busca === null) {
                return "Não existe nenhum produto";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.findAllAtMinValue = (MinValor) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findAll({
                where: {
                    Valor: { [Op.gte]: MinValor }
                }
            });
            if (busca === null) {
                return "Não existe nenhum produto";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.findAllIntervalValue = (MinValor, MaxValor) => __awaiter(this, void 0, void 0, function* () {
            const busca = yield Produto_1.default.findAll({
                where: {
                    Valor: {
                        [Op.between]: [MinValor, MaxValor]
                    }
                }
            });
            if (busca === null) {
                return "Não existe nenhum produto";
            }
            else {
                return this.adicionarLinkImage(busca);
            }
        });
        this.CadastrarProduto = (NomeAdmin, SenhaAdmin, NomeProduto, Valor, Descricao, Quantidade, NomeImage) => __awaiter(this, void 0, void 0, function* () {
            const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
            const quantidade = Quantidade === undefined ? 1 : Quantidade;
            const valor = Valor === undefined ? 0 : Valor;
            if ((yield verificarAdmin) == true) {
                try {
                    let dto = new ProdutoDTO_1.default(NomeProduto, valor, Descricao, Quantidade, NomeImage);
                    const buscaProduto = yield Produto_1.default.findOne({
                        where: {
                            Nome: NomeProduto
                        }
                    });
                    if (buscaProduto === null) {
                        Produto_1.default.create({ Nome: dto.getNome(), Descricao: dto.getDescricao(), Quantidade: quantidade, NomeImage: dto.getNomeImage(), Valor: dto.getValor() });
                    }
                    else {
                        Produto_1.default.update({ Quantidade: buscaProduto.Quantidade + quantidade }, {
                            where: {
                                Nome: NomeProduto
                            }
                        });
                    }
                }
                catch (exception) {
                    return `Error: ${exception.message}`;
                }
            }
        });
        this.AlterarProduto = (NomeAdmin, SenhaAdmin, NomeProduto, Valor, Descricao, Quantidade) => __awaiter(this, void 0, void 0, function* () {
            const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
            if ((yield verificarAdmin) == true) {
                const buscaProduto = yield Produto_1.default.findOne({
                    where: {
                        Nome: NomeProduto
                    }
                });
                if (buscaProduto === null) {
                    return "Esse Produto não existe";
                }
                else {
                    try {
                        Produto_1.default.update({
                            Valor: Valor === undefined ? buscaProduto.Valor : Valor,
                            Descricao: Descricao === undefined ? buscaProduto.Descricao : Descricao,
                            Quantidade: Quantidade === undefined ? buscaProduto.Quantidade : Quantidade,
                        }, {
                            where: {
                                Nome: NomeProduto
                            }
                        });
                    }
                    catch (exception) {
                        return `Error: ${exception.message}`;
                    }
                }
            }
            else {
                return "Você não tem permissão de administrador";
            }
        });
        this.deletarProduto = (NomeAdmin, SenhaAdmin, NomeProduto) => __awaiter(this, void 0, void 0, function* () {
            const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
            if ((yield verificarAdmin) == true) {
                const buscaProduto = yield Produto_1.default.findOne({
                    where: {
                        Nome: NomeProduto
                    }
                });
                if (buscaProduto === null) {
                    return "Esse Produto não existe";
                }
                else {
                    try {
                        Produto_1.default.destroy({
                            where: {
                                Nome: NomeProduto
                            }
                        });
                    }
                    catch (exception) {
                        return `Error: ${exception.message}`;
                    }
                }
            }
            else {
                return "Você não tem permissão de administrador";
            }
        });
        this.VerificarAdmin = (NomeAdmin, SenhaAdmin) => __awaiter(this, void 0, void 0, function* () {
            const buscaAdmin = yield Admin_1.default.findOne({
                where: {
                    Nome: NomeAdmin,
                    Senha: md5(SenhaAdmin)
                }
            });
            if (buscaAdmin == null) {
                return false;
            }
            else {
                return true;
            }
        });
    }
}
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=ProdutoService.js.map