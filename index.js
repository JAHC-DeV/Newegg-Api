//Core
const express = require('express')
const app = express()
const helmet = require('helmet');
/////
//Routes
const neweggRoutes= require('./src/Newegg-Api/index');
const userControl = require("./src/UserControl/index")

//Midelware and Db
const db = require("./src/services/db/db");
app.use(express.json());
//helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  })
);
/////

app.use('/api/newegg-api/',neweggRoutes);
app.use('/api/user/',userControl)


const port = 3000
console.clear()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


