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
const ImageService_1 = require("../services/ImageService");
const VerificarAdmin_1 = __importDefault(require("../services/VerificarAdmin"));
var md5 = require('md5');
const imageService = new ImageService_1.ImageService();
const ImageController = express_1.default.Router();
ImageController.post('/images/:NomeAdmin/:SenhaAdmin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const buscaAdmin = (0, VerificarAdmin_1.default)(req.params.NomeAdmin, req.params.SenhaAdmin);
    if (buscaAdmin === false) {
        res.send("Senha de Administrador errada");
        res.end();
    }
    else {
        imageService.saveImage(req);
        res.send("sucesso");
        res.end();
    }
}));
ImageController.delete('/images/:name', (req, res) => {
    const resposta = imageService.deleteImage(req.params.name);
    if (resposta === false) {
        res.send("houve um erro");
        res.end();
    }
    else {
        res.send(resposta);
        res.end();
    }
});
exports.default = ImageController;
//# sourceMappingURL=ImageController.js.map