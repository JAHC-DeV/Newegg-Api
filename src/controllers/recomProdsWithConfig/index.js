const getRecomProductsWithConfig = require("../../services/webBot/getRecomProductsWithConfig")
const {getProductsDto} = require("../../utils/getClearDto")

async function recomProdsController(req,res) {
    const recomProds = await getRecomProductsWithConfig("Monitor Mouse Pad");
    const clearProds = await getProductsDto(recomProds)
    res.json(clearProds);
    //  res.json(recomProds);
}

module.exports = recomProdsController;