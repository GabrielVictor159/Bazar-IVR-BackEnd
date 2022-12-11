import Keys from "../Keys";

const Sequelize = require('sequelize');
 const db = new Sequelize(Keys.databaseName, Keys.databaseUsername, Keys.databasePasswrod,{
    dialect:Keys.databaseType,
    host:Keys.databaseHost,
    port:Keys.databaseHostPort
})
db.authenticate().then(
    function(){
        console.log('sucesso')
    }
).catch(function(){
    console.log('error')
});

export default db;