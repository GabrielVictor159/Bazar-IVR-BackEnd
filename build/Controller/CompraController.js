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
const CompraService_1 = require("../services/CompraService");
var nodemailer = require('nodemailer');
const compraService = new CompraService_1.CompraService();
const CompraController = express_1.default.Router();
CompraController.post('/RealizarPagamento', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const paymentUrl = yield compraService.RealizarPagamento(req.body.Produtos, req.body.Usuario.idUsuario, req.body.Endereco);
        console.log(paymentUrl);
        res.send(paymentUrl);
    }
    catch (exception) {
        console.log(exception.message);
        res.send("Houve um erro");
    }
}));
CompraController.get('/SucessoDeCompra', (req, res) => {
    // console.log(req.query)
    res.send('Sucesso');
});
CompraController.post('/NotificacaoCompra', (req, res) => {
    console.log(req);
});
CompraController.post('/FalhaDeCompra', (req, res) => {
    console.log(req.body);
    console.log("falha");
    res.send(req.body);
});
CompraController.post('/PagamentoPendente', (req, res) => {
    console.log(req.body);
    console.log("pendente");
    res.send(req.body);
});
exports.default = CompraController;
//# sourceMappingURL=CompraController.js.map