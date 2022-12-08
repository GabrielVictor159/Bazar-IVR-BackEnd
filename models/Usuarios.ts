const Sequelize = require('sequelize');
import db from "../Infra/DB"
 const Usuarios = db.define('usuarios',{
   CPF:{
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey:true
   },
   Nome:{
    type: Sequelize.STRING,
    allowNull: false,
   },
   Senha:{
    type: Sequelize.STRING,
    allowNull:false
   },
   Endereco:{
    type: Sequelize.STRING,
    allowNull:false
   },
   DataDeNascimento:{
    type: Sequelize.DataTypes.DATE,
    allowNull:false
   },
   Email:{
    type: Sequelize.STRING,
    allowNull:false,
    unique:true
   },
   Telefone:{
    type: Sequelize.INTEGER,
    allowNull:false
   }
},{timestamps: false})
Usuarios.sync();
export default Usuarios;