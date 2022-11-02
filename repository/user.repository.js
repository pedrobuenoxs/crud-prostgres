const Seller = require("../model/seller.model");

module.exports = class SellerRepository {
  constructor() {}
  async create({
    id,
    name,
    email,
    password,
    desc,
    payment,
    delivery,
    tag,
    wpp,
  }) {
    try {
      return await Seller.create({
        id,
        name,
        email,
        password,
        desc,
        payment,
        delivery,
        tag,
        wpp,
      });
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      return await Seller.findAll();
    } catch (error) {
      return error;
    }
  }

  async update() {
    try {
      console.log("update seller");
    } catch (error) {}
  }

  async getByTag() {
    try {
      console.log("get seller by tag");
    } catch (error) {}
  }
  async getById(id) {
    try {
      console.log(id);
      return await Seller.findByPk(id);
    } catch (error) {
      return error;
    }
  }
  async delete() {
    try {
      console.log("delete seller");
    } catch (error) {}
  }
};
