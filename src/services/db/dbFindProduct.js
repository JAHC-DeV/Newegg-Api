const product = require('../../Models/product')
const { Op } = require("sequelize");

async function findProduct(keywords){
    
const searchQuery = keywords;
const searchTerms = searchQuery.split(" ");
const searchConditions = searchTerms.map(term => ({
  [Op.or]: [
    { name: { [Op.like]: `%${term}%` } }
  ],
}));

/*const results = await Product.findAll({
  where: {
    [Op.and]: searchConditions,
  },
});*/
    const result = await product.findAll({where:{  [Op.and]: searchConditions }})
    return result;
}

module.exports = findProduct;