import ProdutoDTO from "../dto/ProdutoDTO";
import Produto from "../models/Produto";
const { Op } = require("sequelize");
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

}