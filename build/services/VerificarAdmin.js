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
const Admin_1 = __importDefault(require("../models/Admin"));
var md5 = require('md5');
function VerificarAdmin(NomeAdmin, SenhaAdmin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
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
        }
        catch (exception) {
            console.log(exception.message);
        }
    });
}
exports.default = VerificarAdmin;
//# sourceMappingURL=VerificarAdmin.js.map