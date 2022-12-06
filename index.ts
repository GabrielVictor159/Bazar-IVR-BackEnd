
import express from 'express';
const app = express();
import db from './Infra/DB';
import usuario from './models/Usuarios'
import produto from './models/Produto'
import compras from './models/Compras';
import AdminController from "./Controller/AdminController"
import UsuariosController from "./Controller/UsuariosController";
app.use(express.json());

app.get('/', async (req,res) =>{
 res.send("OK");
});

app.use('/', AdminController);
app.use("/",UsuariosController);
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