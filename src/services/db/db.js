const { Sequelize } = require('sequelize');
//const findProduct = require("./dbFindProduct");

const db = new Sequelize('newegg-api', 'root', 'Jose2112*', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'/*| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

(async ()=>{
    try {
      await db.authenticate();
      console.clear();
      db.sync()
      console.log("Db conectada con exito")
  } catch (error) {
      console.log("Error al conectar la Db ", error)
  }
 // db.sync({force:true})
  })()
 
module.exports = db;