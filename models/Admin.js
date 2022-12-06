const Sequelize = require('sequelize');
const database = require('../Infra/DB');

const Admin = database.define('admin',{
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
module.exports = Admin