const Sequelize = require('sequelize');
import db from "../Infra/DB"
const Produto = db.define('produto',{
    idProduto:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    Nome:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true    
    },
    Descricao:{
        type: Sequelize.STRING,
        allowNull:true
    },
    Quantidade:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    NomeImage:{
        type: Sequelize.STRING,
        allowNull:true
    },
    Valor:{
        type: Sequelize.DOUBLE,
        allowNull:false
    }
},{timestamps: false})

Produto.sync();

export default Produto;