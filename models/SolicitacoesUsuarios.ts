const Sequelize = require('sequelize');
import db from "../Infra/DB"
const SolicitacoesUsuarios = db.define('solicitacoesusuarios',{
    idSolicitacao:{ 
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    FirstName:{
        type: Sequelize.STRING,
        allowNull: false,
       },
       LastName:{
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
       },
       DataDeCriacao:{
        type: Sequelize.DataTypes.DATE,
        allowNull:false
       },
    
},{timestamps: false})

SolicitacoesUsuarios .sync();

export default SolicitacoesUsuarios ;