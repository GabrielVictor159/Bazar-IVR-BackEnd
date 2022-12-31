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
const AdminController = express_1.default.Router();
const AdminService_1 = require("../services/AdminService");
const adminService = new AdminService_1.AdminService();
AdminController.get('/Admin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Login = yield adminService.Login(req.body.Nome, req.body.Senha);
    res.send(Login);
}));
exports.default = AdminController;
//# sourceMappingURL=AdminController.js.map