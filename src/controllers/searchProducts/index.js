const findProduct = require("../../services/findProduct")
const setOrUpdateDb = require("../../utils/setOrUpdateDb")
const {getProductsDtoWeb} = require("../../utils/getClearDto")

async function searchProductsController(req, res) {
    const {keywords,page} = req.body;
    result = (await findInWebBot(keywords,page));
    const produtcsDto = await getProductsDtoWeb(result.products,result.maxPages);
    res.json(produtcsDto)
}

const findInWebBot = async (keywords, page) => {
    const result = await findProduct.webBot(keywords, page);
    setOrUpdateDb(result.products,keywords)
    return result;
}




module.exports = searchProductsController