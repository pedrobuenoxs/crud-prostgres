const Seller = require("../model/seller.model");

module.exports = class SellerRepository {
  constructor() {}
  async create({ name, email }) {
    try {
      return await Seller.create({ name, email });
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
  async getById() {
    try {
      console.log("get seller by id");
    } catch (error) {}
  }
  async delete() {
    try {
      console.log("delete seller");
    } catch (error) {}
  }
};
