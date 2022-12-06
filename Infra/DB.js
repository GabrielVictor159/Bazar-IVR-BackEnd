const Sequelize = require('sequelize');
const sequelize = new Sequelize('loja', 'root', '159487',{
    dialect:'mysql',
    host:'localhost',
    port:3306
})
sequelize.authenticate().then(
    function(){
        console.log('sucesso')
    }
).catch(function(){
    console.log('error')
});
module.exports = sequelize;
