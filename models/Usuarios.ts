const Sequelize = require('sequelize');
import db from "../Infra/DB"
 const Usuarios = db.define('usuarios',{
   CPF:{
    type: Sequelize.INTEGER,
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
   }
},{timestamps: false})

export default Usuarios;