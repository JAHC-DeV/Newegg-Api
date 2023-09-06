const product = require('../../Models/product')
const { Op } = require("sequelize");

async function findProduct(keywords, limit, offset) {

  const searchQuery = keywords;
  const searchTerms = searchQuery.split(" ");
  const searchConditions = searchTerms.map(term => ({
    [Op.and]: [
      { name: { [Op.like]: `%${term}%` } }
    ],
  }));
  const result = await product.findAll({ where: { [Op.and]: searchConditions }, limit, offset })
  return result;
}

module.exports = findProduct;