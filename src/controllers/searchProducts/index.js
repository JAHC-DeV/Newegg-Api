const findProduct = require("../../services/findProduct")
const product = require("../../Models/product")
async function searchProducts(req, res) {
    const body = req.body;

    // const result =await searchProducts(body.keywords,body.page)
    let result = await findProduct.db(body.keywords)

    if (result == undefined || result == null || result == [] || result.length === 0) {
        console.log("No hay en Bd");
       result =  await findInWebBot(body.keywords);
    }
   // console.log(result);
    res.json(result)
console.log("un cambio")
}

const findInWebBot = async (keywords) => {
    const result = await findProduct.webBot(keywords, 1);
    const productsPromise = result.products.map(async item =>{
        try {
            const nprod = await product.create({
                name:item.name,
                sku:item.sku,
                link:item.link,
                imgUrl:item.imgUrl,
                price:item.price,
                category:item.category
                })
        } catch (error) {
            
        }       
    })
    Promise.all(productsPromise).then();
    return result;
}

module.exports = searchProducts