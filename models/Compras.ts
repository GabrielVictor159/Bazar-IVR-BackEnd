const Sequelize = require('sequelize');
import db from "../Infra/DB"
 const Compras = db.define('compras',{
  idCompra:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
  NomeProduto:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   Quantidade:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   ValorTotal:{
    type: Sequelize.DOUBLE,
    allowNull: false,
   },
  FirstName:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   LastName:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   CEP:{
    type: Sequelize.INTEGER,
    allowNull:false
   },
   Endereco:{
    type: Sequelize.STRING,
    allowNull:false
   },
   Telefone:{
    type: Sequelize.INTEGER,
    allowNull:false
   },
   Method:{
    type: Sequelize.STRING,
    allowNull:false
   },
   CPF:{
    type: Sequelize.INTEGER,
    allowNull:false
   },
   Email:{
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
   },
},{timestamps: false})
Compras.sync();
export default Compras;