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
exports.ImageService = void 0;
const formidable_1 = __importDefault(require("formidable"));
var fs = require('fs');
class ImageService {
    constructor() {
        this.saveImage = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let resposta;
            var form = new formidable_1.default.IncomingForm({
                uploadDir: "/app/images",
                multiples: true,
                keepExtensions: true,
                filename(name, ext, part, form) {
                    return name + ".png";
                },
            });
            form.parse(req.body, (err, fields, files) => {
                if (err) {
                    resposta = JSON.stringify({
                        result: "failed",
                        message: `Não foi possivel salvar, Error: ${err}`
                    });
                }
                else {
                    resposta = JSON.stringify({
                        result: "sucesso",
                        message: `o arquivo foi salvo`
                    });
                }
            });
        });
        this.deleteImage = (name) => {
            const path = `/app/images/${name}.png`;
            let resposta = true;
            fs.unlink(path, (err) => {
                if (err) {
                    console.log(err);
                    resposta = err;
                }
            });
            return resposta;
        };
    }
}
exports.ImageService = ImageService;
//# sourceMappingURL=ImageService.js.map