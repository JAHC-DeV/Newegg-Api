//Core
const express = require('express')
const app = express()
/////
//Midelware and Db
const db = require("./src/services/db/db");
app.use(express.json());
/////

//Controllers
const getCategories = require("./src/services/getCategories")
const searchProductsController = require('./src/controllers/searchProducts');
const getRecomProdsController = require("./src/controllers/recomProds")
const getRecomProdsWithConfigController = require("./src/controllers/recomProdsWithConfig");
const getProdInfoController = require('./src/controllers/getProductInfo');
/////

const port = 3000
console.clear()
app.get('/categories', async (req, res) => {
  const categories = await getCategories();
  console.log("Pidiendo Categorias")
  res.json(categories);
})
app.get('/recomProds', async (req, res) => {
  getRecomProdsController(req, res);
})
app.get('/recomProdsWithConfig', async (req, res) => {
  getRecomProdsWithConfigController(req, res);
})
app.post("/search", async (req, res) => {
  searchProductsController(req, res);
});

app.post("/getProdInfo",async (req,res)=>{
     await getProdInfoController(req,res);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


