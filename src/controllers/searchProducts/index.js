const findProduct = require("../../services/findProduct")
const product = require("../../Models/product")

async function searchProducts(req, res) {
    const body = req.body;
    const limit = 18;
    const offset = (body.page - 1) * limit; 
    let result = await findProduct.db(body.keywords,limit,offset)

    if ( result.length < 17) {
        console.log("No hay en Bd");
        result = (await findInWebBot(body.keywords, body.page)).products;
    }

    const produtcsDto = await getProductsDto(result);

    res.json(produtcsDto)
}

const findInWebBot = async (keywords, page) => {
    const result = await findProduct.webBot(keywords, page);
    const productsPromise = result.products.map(async item => {
        try {
            const nprod = await product.create({
                name: item.name,
                sku: item.sku,
                link: item.link,
                imgUrl: item.imgUrl,
                price: item.price,
                category: item.category
            })
        } catch (error) {

        }
    })
    Promise.all(productsPromise).then();
    return result;
}

const getProductsDto = async (products) => {
    let produtcsDto = await products.map(item => {
        return produtcDto = ({
            id: item.id,
            sku: item.sku,
            name: item.name,
            link: item.link,
            imgUrl: item.imgUrl,
            price: item.price,
            desciption: item.desciption,
            category: item.category,
        });
    })
    return produtcsDto;
}


module.exports = searchProducts