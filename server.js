require("dotenv").config();

const sequelize = require("./config/database");

//fazer conexão com o banco de dados
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const SellerRepository = require("./repository/user.repository");

const repository = new SellerRepository();

repository.create({ name: "pedro", email: "pedro@email.com" }).then((data) => {
  console.log(data);
  sequelize.close();
});

// repository.getAll().then((data) => {
//   dataObj = data.map((item) => {
//     return item.dataValues;
//   });
//   console.log(dataObj);
//   sequelize.close();
// });
