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
exports.CompraService = void 0;
const Keys_1 = __importDefault(require("../Keys"));
const Produto_1 = __importDefault(require("../models/Produto"));
const Usuarios_1 = __importDefault(require("../models/Usuarios"));
const mercadopago = require('mercadopago');
mercadopago.configure({
    access_token: Keys_1.default.mercadoPagoAcessToken,
    sandbox: true
});
class CompraService {
    constructor() {
        this.RealizarPagamento = (produtos, usuarioId, endereco) => __awaiter(this, void 0, void 0, function* () {
            // Verifique se o objeto produtos possui a propriedade idProduto
            const usuario = Usuarios_1.default.findByPk(usuarioId);
            if (usuario === null) {
                return "id do usuario invalido";
            }
            let produtoIds = [];
            produtos.map((value) => {
                produtoIds.push(value.idProduto);
            });
            console.log(produtoIds);
            // Crie um array de objetos item usando o método map e atribua o resultado a uma variável
            const localizeQuantidade = (item) => {
                for (let i = 0; i < produtos.length; i++) {
                    if (item.idProduto === produtos[i].idProduto) {
                        return produtos[i].Quantidade;
                    }
                }
                return 1;
            };
            const items = yield Produto_1.default.findAll({
                where: {
                    idProduto: produtoIds
                }
            }).then((response) => {
                return response.map((produto, index) => {
                    return {
                        title: produto.Nome,
                        unit_price: produto.Valor,
                        quantity: localizeQuantidade(produto),
                        description: produto.Descricao
                    };
                });
            });
            console.log(items);
            const preference = {
                notification_url: `${Keys_1.default.link}NotificacaoCompra`,
                items: items,
                payer: {
                    name: usuario.FirstName,
                    surname: usuario.LastName,
                    email: usuario.Email,
                },
                external_reference: produtos.referencia,
                back_urls: {
                    success: `${Keys_1.default.link}SucessoDeCompra`,
                    failure: `${Keys_1.default.link}FalhaDeCompra`,
                    pending: `${Keys_1.default.link}PagamentoPendente`,
                },
                auto_return: `approved`,
                shipping: {
                    receiver_address: {
                        zip_code: endereco.cep,
                        street_name: endereco.rua,
                        street_number: endereco.numero,
                        neighborhood: endereco.bairro,
                        city: endereco.cidade,
                        state: endereco.estado
                    }
                }
            };
            const payment = yield mercadopago.preferences.create(preference);
            const paymentUrl = payment.body.init_point;
            // Retorne a paymentUrl
            return paymentUrl;
        });
    }
}
exports.CompraService = CompraService;
//# sourceMappingURL=CompraService.js.map