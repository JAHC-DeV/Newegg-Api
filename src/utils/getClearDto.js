const {imgUrl,prodUrl} = require("./constUrl")

const getProductsDto = async (products) => {
    let produtcsDto = await products.map(item => {
        let category = item.ItemInfo.Subcategory.SubcategoryDescription;
        category = category.replaceAll(" ", "")
        return produtcDto = ({
            id: item.id,
            sku: item.ItemInfo.Item,
            name: item.ItemInfo.Description.Title,
            link: prodUrl + item.ItemInfo.Item,
            imgUrl: imgUrl + item.ItemInfo.Image.ItemCellImageName,
            price: item.ItemInfo.FinalPrice,
            desciption: item.ItemInfo.Description.BulletDescription,
            category: category,
        });
    })
    return produtcsDto;
}

module.exports = {getProductsDto}