const getRecomProducts = require("../../services/webBot/getRecomProducts")
const {getProductsDto} = require("../../utils/getClearDto")


async function recomProdsController(req,res) {
    const recomProds = await getRecomProducts();
    const clearProds = await getProductsDto(recomProds)
    res.json(clearProds);
   //res.json(recomProds);
}



module.exports = recomProdsController;