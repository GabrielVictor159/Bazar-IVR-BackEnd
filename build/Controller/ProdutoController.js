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
const ProdutoController = express_1.default.Router();
const ProdutoService_1 = require("../services/ProdutoService");
const produtoService = new ProdutoService_1.ProdutoService();
ProdutoController.get('/Produtos/FindAll', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAll = yield produtoService.findAll();
    res.send(findAll);
}));
ProdutoController.get('/Produtos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findById = yield produtoService.findById(parseInt(req.params.id));
    res.send(findById);
}));
ProdutoController.get('/Produtos/FindByName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findByName = yield produtoService.findByName(req.body.Nome);
    res.send(findByName);
}));
ProdutoController.get('/Produtos/FindAllLazyLoading/:index/:size', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findByName = yield produtoService.findAllLazyLoading(parseInt(req.params.index), parseInt(req.params.size));
        res.send(findByName);
        res.end();
    }
    catch (exception) {
        console.log(exception.message);
        res.end();
    }
}));
ProdutoController.get('/Produtos/findAllAtMaxValue', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllAtMaxValue = yield produtoService.findAllAtMaxValue(req.body.MaxValor);
    res.send(findAllAtMaxValue);
}));
ProdutoController.get('/Produtos/findAllAtMinValue', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllAtMinValue = yield produtoService.findAllAtMinValue(req.body.MinValor);
    res.send(findAllAtMinValue);
}));
ProdutoController.get('/Produtos/findAllIntervalValue', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findAllIntervalValue = yield produtoService.findAllIntervalValue(req.body.MinValor, req.body.MaxValor);
    res.send(findAllIntervalValue);
}));
ProdutoController.post('/Produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    function removeExtension(filename) {
        return filename.replace(/\.[^\/.]+$/, '');
    }
    const CadastrarProduto = yield produtoService.CadastrarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto, req.body.Valor, req.body.Descricao, req.body.Quantidade, removeExtension(req.body.NomeImage));
    res.send(CadastrarProduto);
    res.end();
}));
ProdutoController.put('/Produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const AlterarProduto = yield produtoService.AlterarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto, req.body.Valor, req.body.Descricao, req.body.Quantidade);
    res.send(AlterarProduto);
}));
ProdutoController.delete('/Produtos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deletarProduto = yield produtoService.deletarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto);
    res.send(deletarProduto);
}));
exports.default = ProdutoController;
//# sourceMappingURL=ProdutoController.js.map