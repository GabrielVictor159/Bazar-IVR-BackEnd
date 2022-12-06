const Sequelize = require('sequelize');
const database = require('../Infra/DB');

 const Compras = database.define('compras',{
   Usuario_CPF:{
    type: Sequelize.INTEGER,
    allowNull: false,
    references: 'usuarios',
    referencesKey: 'CPF',
    primaryKey:true
   },
   idProduto:{
    type: Sequelize.INTEGER,
    allowNull:false,
    references: 'produto',
    referencesKey: 'idProduto',
    primaryKey:true
   },
   quantidade:{
    type: Sequelize.INTEGER,
    allowNull:false
   }
},{timestamps: false})

module.exports = Compras