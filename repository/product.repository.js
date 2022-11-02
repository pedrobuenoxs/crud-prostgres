const Product = require("../model/product.model");

module.exports = class UserRepository {
  constructor() {}
  async create(data) {
    try {
      const { id, name, price, measure, status, category } = data;
      const product = {
        id_seller: id,
        name: name,
        price,
        measure,
        status,
        category,
      };
      return await Product.create(product);
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      return await Product.findAll({ where: { id_seller: id } });
    } catch (error) {
      throw error;
    }
  }

  async getByCategory(cat) {
    try {
      return await Product.findOne({ where: { category: cat } });
    } catch (error) {
      return error;
    }
  }
};
