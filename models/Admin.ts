const Sequelize = require('sequelize');
import db from "../Infra/DB"

const Admin = db.define('admin',{
   idAdmin: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true
   },
   Nome:{
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
   },
   Senha:{
    type: Sequelize.STRING,
    allowNull: false,
    unique:true
   },
},{timestamps: false})
Admin.sync();

export default Admin;