const Sequelize = require('sequelize');
const database = require('../Infra/DB');
const Compras = require('./Compras');
const Produto = database.define('produto',{
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
    Foto:{
        type: Sequelize.BLOB,
        allowNull:true
    },
    Valor:{
        type: Sequelize.DOUBLE,
        allowNull:false
    }
},{timestamps: false})


module.exports = Produto