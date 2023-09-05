const express = require('express')
const app = express()
const getCategories = require("./src/services/getCategories")

const db = require("./src/services/db/db");
const searchProducts = require('./src/controllers/searchProducts');
app.use(express.json());
const port = 3000

app.get('/categories', async (req, res) => {
    const categories = await getCategories();
    console.log("Pidiendo Categorias")
    res.json(categories);
})
app.post("/search", async(req,res)=>{
  searchProducts(req,res);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})