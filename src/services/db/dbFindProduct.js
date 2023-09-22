const product = require('../../Newegg-Api/Models/product')
const { Op } = require("sequelize");

async function findProduct(keywords, limit, offset) {
  const removeNumbers = (str) => str.replace(/\d+/g, '').trim();
  const searchQuery = removeNumbers(keywords);
  const searchTerms = searchQuery.split(" ");
  const searchTermsIndex = keywords.split(" ");
  const searchConditions = searchTerms.map(term => ({
    [Op.or]: [
      { name: { [Op.like]: `%${term}%` } },
      { category: { [Op.like]: `%${term}%` } }
    ],
  }));
  const searchConditionsIndex = searchTermsIndex.map(term => ({
    [Op.or]: [
      { searchIndex: { [Op.like]: `%${term}%` } },  
    ],
  }));
  const result = await product.findAll({ where: { [Op.or]:searchConditionsIndex,                                                
                                                  [Op.and]: searchConditions }, limit, offset })
                                                  
  return result;
}

module.exports = findProduct;