const Sequelize = require('sequelize');
import db from "../Infra/DB"
 const Compras = db.define('compras',{
   Usuario_CPF:{
    type: Sequelize.STRING,
    allowNull: false,
    references: 'usuarios',
    referencesKey: 'CPF',
    primaryKey:true
   },
   idProduto:{
    type: Sequelize.INTEGER,
    allowNull:false,
    references: 'produtos',
    referencesKey: 'idProduto',
    primaryKey:true
   },
   quantidade:{
    type: Sequelize.INTEGER,
    allowNull:false
   }
},{timestamps: false})

export default Compras;