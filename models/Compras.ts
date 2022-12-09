const Sequelize = require('sequelize');
import db from "../Infra/DB"
 const Compras = db.define('compras',{
  idCompra:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
  },
  idUsuario:{
    type: Sequelize.INTEGER,
    allowNull:false,
    references: 'usuarios',
    referencesKey: 'idUsuario',
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
   },
   CEP:{
    type: Sequelize.STRING,
    allowNull:false
   },
   Endereco:{
    type: Sequelize.STRING,
    allowNull:false
   }
},{timestamps: false})
Compras.sync();
export default Compras;