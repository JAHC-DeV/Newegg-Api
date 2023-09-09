const getRecomProducts = require("../../services/webBot/getRecomProducts")
const {getProductsDto} = require("../../utils/getClearDto")
const setOrUpdateDb = require("../../utils/setOrUpdateDb")

async function recomProdsController(req,res) {
    const recomProds = await getRecomProducts();
   // console.log(recomProds);
    const clearProds = await getProductsDto(recomProds);
    setOrUpdateDb(clearProds,"")
    res.json(clearProds);   
}



module.exports = recomProdsController;