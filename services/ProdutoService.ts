import ProdutoDTO from "../dto/ProdutoDTO";
import Admin from "../models/Admin";
import Produto from "../models/Produto";
const { Op } = require("sequelize");
var md5 = require('md5');
export class ProdutoService{
    constructor(){}
    findAll = async()=>{
        const busca = await Produto.findAll();
        if(busca===null){
            return "Sem produtos"
        }
        else{
            return busca
        }
    }
    findById = async(id:number)=>{
        const busca = await Produto.findByPk(id)
        if(busca===null){
            return "Não existe esse produto"
        }
        else{
            return busca
        }
    }
    findByName = async(Nome:string)=>{
        const busca = await Produto.findOne({
            where:{
                Nome:Nome
            }
        })
        if(busca===null){
            return "Não existe esse produto"
        }
        else{
            return busca
        }
    }
    findAllAtMaxValue = async(MaxValor:number)=>{
        const busca = await Produto.findAll({
            where:{
                Valor:{ [Op.lte]:MaxValor }
            }
        })
        if(busca===null){
            return "Não existe nenhum produto"
        }
        else{
            return busca
        }
    }
    findAllAtMinValue = async(MinValor:number)=>{
        const busca = await Produto.findAll({
            where:{
               Valor:{ [Op.gte]:MinValor }
            }
        })
        if(busca===null){
            return "Não existe nenhum produto"
        }
        else{
            return busca
        }
    }
    findAllIntervalValue = async(MinValor:number, MaxValor:number)=>{
        const busca = await Produto.findAll({
            where:{
                Valor:{
                    [Op.between]:[MinValor, MaxValor]
                }
            }
        })
        if(busca===null){
            return "Não existe nenhum produto"
        }
        else{
            return busca
        }
    }
    CadastrarProduto = async(NomeAdmin:String, SenhaAdmin:String, NomeProduto:String, Valor?: number, Descricao?: String, Quantidade?: number, Foto?: Blob)=>{
        const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
        const quantidade = Quantidade === undefined?1:Quantidade;
        const valor = Valor === undefined?0:Valor;
        if( await verificarAdmin==true){
            try{

            let dto = new ProdutoDTO(NomeProduto, valor, Descricao, Quantidade, Foto);
            const buscaProduto = await Produto.findOne({
            where:{
                Nome:NomeProduto
            }
            })
            if(buscaProduto===null){
                Produto.create({Nome:dto.getNome(), Valor:dto.getValor(), Descricao:dto.getDescricao(), Quantidade:dto.getDescricao()})
            }
            else{
                Produto.update({Quantidade:buscaProduto.Quantidade + quantidade},{
                    where:{
                        Nome:NomeProduto
                    }
                })
            }
            
            }
            catch(exception:any){
                return `Error: ${exception.message}`
            }
        }
    }
    AlterarProduto = async(NomeAdmin:String, SenhaAdmin:String, NomeProduto:String, Valor?:number, Descricao?:String, Quantidade?: number, Foto?: Blob)=>{
        const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
        if( await verificarAdmin==true){
            const buscaProduto = await Produto.findOne({
                where:{
                    Nome:NomeProduto
                }
                })
                if(buscaProduto===null){
                    return "Esse Produto não existe"
                }
                else{
                    try{
                        Produto.update(
                            {
                                Valor:Valor===undefined?buscaProduto.Valor:Valor,
                                Descricao:Descricao===undefined?buscaProduto.Descricao:Descricao,
                                Quantidade:Quantidade===undefined?buscaProduto.Quantidade:Quantidade,
                                Foto:Foto===undefined?buscaProduto.Foto:Foto
                            },
                            {
                                where:{
                                    Nome:NomeProduto
                                }
                            }
                            )
                    }
                    catch(exception:any){
                        return `Error: ${exception.message}`
                    }
                }
        }
        else{
            return "Você não tem permissão de administrador"
        }
    }
    deletarProduto = async(NomeAdmin:String, SenhaAdmin:string, NomeProduto:String)=>{
        const verificarAdmin = this.VerificarAdmin(NomeAdmin, SenhaAdmin);
        if( await verificarAdmin==true){
            const buscaProduto = await Produto.findOne({
                where:{
                    Nome:NomeProduto
                }
                })
                if(buscaProduto===null){
                    return "Esse Produto não existe"
                }
                else{
                    try{
                    Produto.destroy({
                        where:{
                            Nome:NomeProduto
                        }
                    })
                }
                catch(exception:any){
                    return `Error: ${exception.message}`
                }
                }
        }
        else{
            return "Você não tem permissão de administrador"
        }
    }
    VerificarAdmin = async(NomeAdmin:String, SenhaAdmin:String)=>{
        const buscaAdmin = await Admin.findOne({
            where:{
                Nome:NomeAdmin,
                Senha:md5(SenhaAdmin)
            }
        })
        if(buscaAdmin==null){
            return false
        }
        else{
            return true
        }
    }
}