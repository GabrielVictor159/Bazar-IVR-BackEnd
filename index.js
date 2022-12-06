const express = require('express');
const app = express();
const db = require('./Infra/DB')
const admin = require('./models/Admin')
const usuario = require('./models/Usuarios')
const produto = require('./models/Produto')
const compras = require('./models/Compras');
app.use(express.json());

app.get('/', async (req,res) =>{
 res.send("OK");
});
app.post('/cadastrarAdmin', async (req, res)=>{
    console.log(req.body);
    await admin.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado"
        })
    }).catch(()=>{
        return res.status(400).json({
            erro:false,
            mensagem:"Erro: Usuario não cadastrado"
        })
    })
    
})

app.post('/cadastrarUsuario', async (req, res)=>{
    console.log(req.body);
    await usuario.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado"
        })
    }).catch(()=>{
        return res.status(400).json({
            erro:false,
            mensagem:"Erro: Usuario não cadastrado"
        })
    })
    
})
app.post('/cadastrarProduto', async (req, res)=>{
    console.log(req.body);
    await produto.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado"
        })
    }).catch(()=>{
        return res.status(400).json({
            erro:false,
            mensagem:"Erro: Usuario não cadastrado"
        })
    })
    
})
app.post('/cadastrarCompra', async (req, res)=>{
    console.log(req.body);
    await compras.create(req.body)
    .then(()=>{
        return res.json({
            erro:false,
            mensagem:"Usuario cadastrado"
        })
    }).catch(()=>{
        return res.status(400).json({
            erro:false,
            mensagem:"Erro: Usuario não cadastrado"
        })
    })
    
})
app.listen(3030, () =>{
    console.log('teste')
})