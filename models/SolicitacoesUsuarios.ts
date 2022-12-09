const Sequelize = require('sequelize');
import db from "../Infra/DB"
const SolicitacoesUsuarios = db.define('produto',{
    idSolicitacao:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    EmailSolicitante:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true    
    },
    Validacao:{
        type: Sequelize.BOOLEAN,
        allowNull:true,
        default:false
    },
    
},{timestamps: false})

SolicitacoesUsuarios .sync();

export default SolicitacoesUsuarios ;