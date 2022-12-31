import express from "express";
import Keys from "../Keys";
import { CompraService } from "../services/CompraService";
var nodemailer = require('nodemailer');
const compraService = new CompraService();
const CompraController = express.Router();

CompraController.post('/RealizarPagamento', async (req, res) => {
    try {
        console.log(req.body)
        const paymentUrl = await compraService.RealizarPagamento(req.body.Produtos, req.body.Usuario.idUsuario, req.body.Endereco);
        console.log(paymentUrl)
        res.send(paymentUrl);
    }
    catch (exception: any) {
        console.log(exception.message)
        res.send("Houve um erro")
    }

})
CompraController.get('/SucessoDeCompra', (req, res) => {
    // console.log(req.query)
    res.send('Sucesso')
  });
CompraController.post('/NotificacaoCompra',(req,res)=>{
    console.log(req)
});
CompraController.post('/FalhaDeCompra', (req, res) => {
    console.log(req.body)
    console.log("falha")
    res.send(req.body)
})
CompraController.post('/PagamentoPendente', (req, res) => {
    console.log(req.body)
    console.log("pendente")
    res.send(req.body)
})

export default CompraController
