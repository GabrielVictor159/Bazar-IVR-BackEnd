"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImageService_1 = require("../services/ImageService");
var md5 = require('md5');
const imageService = new ImageService_1.ImageService();
const ImageController = express_1.default.Router();
ImageController.post('/images/:NomeAdmin/:SenhaAdmin', (req, res) => {
    console.log(req.params.NomeAdmin);
    try {
        imageService.saveImage(req, res);
        res.redirect("/");
    }
    catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
});
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