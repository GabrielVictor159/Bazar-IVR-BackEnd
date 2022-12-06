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
const app = (0, express_1.default)();
const Usuarios_1 = __importDefault(require("./models/Usuarios"));
const Produto_1 = __importDefault(require("./models/Produto"));
const Compras_1 = __importDefault(require("./models/Compras"));
const AdminController_1 = __importDefault(require("./Controller/AdminController"));
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("OK");
}));
app.use('/', AdminController_1.default);
app.post('/cadastrarUsuario', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield Usuarios_1.default.create(req.body)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: false,
            mensagem: "Erro: Usuario não cadastrado"
        });
    });
}));
app.post('/cadastrarProduto', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield Produto_1.default.create(req.body)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: false,
            mensagem: "Erro: Usuario não cadastrado"
        });
    });
}));
app.post('/cadastrarCompra', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    yield Compras_1.default.create(req.body)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: false,
            mensagem: "Erro: Usuario não cadastrado"
        });
    });
}));
app.listen(3030, () => {
    console.log('teste');
});
//# sourceMappingURL=index.js.map