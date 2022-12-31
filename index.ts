
import express from 'express';
const app = express();
import db from './Infra/DB';
import usuario from './models/Usuarios'
import produto from './models/Produto'
import compras from './models/Compras';
import AdminController from "./Controller/AdminController"
import UsuariosController from "./Controller/UsuariosController";
import ProdutoController from './Controller/ProdutoController';
import SolicitacoesEmailController from './Controller/SolicitacoesEmailController';
import ImageController from './Controller/ImageController';
import CompraController from './Controller/CompraController';
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.get('/', async (req,res) =>{
 res.send("OK");
});

app.use('/', AdminController);
app.use("/",UsuariosController);
app.use('/',ProdutoController);
app.use('/',SolicitacoesEmailController)
 app.use('/',ImageController)
 app.use('/', CompraController)
app.use(express.static('public')); 
app.use('/images', express.static('images'));
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