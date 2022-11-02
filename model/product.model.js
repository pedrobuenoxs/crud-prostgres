const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Seller = sequelize.define("seller", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
  description: {
    type: DataTypes.STRING,
  },
});

module.exports = Seller;
