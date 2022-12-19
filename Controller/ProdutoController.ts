import express from 'express';
const ProdutoController = express.Router();
import { ProdutoService } from '../services/ProdutoService';
import VerificarAdmin from '../services/VerificarAdmin';
const produtoService = new ProdutoService();

ProdutoController.get('/Produtos/FindAll', async(req,res)=>{
    const findAll = await produtoService.findAll();
    res.send(findAll)
})

ProdutoController.get('/Produtos/:id', async(req, res)=>{
    const findById = await produtoService.findById(parseInt(req.params.id));

    res.send(findById)
})

ProdutoController.get('/Produtos/FindByName', async(req, res)=>{
    const findByName = await produtoService.findByName(req.body.Nome);
    
    res.send(findByName)
})
ProdutoController.get('/Produtos/FindAllLazyLoading/:index/:size', async(req, res)=>{
    try{
    const findByName = await produtoService.findAllLazyLoading(parseInt(req.params.index), parseInt(req.params.size));
    res.send(findByName)
    res.end()
    }
    catch(exception:any){
        console.log(exception.message)
        res.end()
    }
})

ProdutoController.get('/Produtos/findAllAtMaxValue', async(req, res)=>{
    const findAllAtMaxValue = await produtoService.findAllAtMaxValue(req.body.MaxValor);
    res.send(findAllAtMaxValue)
})

ProdutoController.get('/Produtos/findAllAtMinValue', async(req,res)=>{
    const findAllAtMinValue = await produtoService.findAllAtMinValue(req.body.MinValor);
    res.send(findAllAtMinValue)
})

ProdutoController.get('/Produtos/findAllIntervalValue', async(req,res)=>{
    const findAllIntervalValue = await produtoService.findAllIntervalValue(req.body.MinValor, req.body.MaxValor);
    res.send(findAllIntervalValue)
})

ProdutoController.post('/Produtos', async(req, res)=>{
    function removeExtension(filename:string) {
        return filename.replace(/\.[^\/.]+$/, '');
      }

    const CadastrarProduto = await produtoService.CadastrarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto, req.body.Valor, req.body.Descricao, req.body.Quantidade, removeExtension( req.body.NomeImage));
    res.send(CadastrarProduto)
    res.end();
})

ProdutoController.put('/Produtos', async(req, res)=>{
    const AlterarProduto = await produtoService.AlterarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto, req.body.Valor, req.body.Descricao, req.body.Quantidade)
    res.send(AlterarProduto)
})

ProdutoController.delete('/Produtos', async(req, res)=>{
    const deletarProduto = await produtoService.deletarProduto(req.body.NomeAdmin, req.body.SenhaAdmin, req.body.NomeProduto);
    res.send(deletarProduto)
})

export default ProdutoController;