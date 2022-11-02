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

const payment = {
  1: "Dinheiro",
  2: "Cartão",
  4: "Pix",
};

const delivery = {
  1: "Entrega",
  2: "Retirada",
  3: "Delivery",
};

const tag = {
  1: "Frutas",
  2: "Granja",
  3: "Horta",
  4: "Carnes",
  5: "Laticinios",
  6: "Outros",
};

// repository
//   .create({
//     id: 10,
//     name: "pedro",
//     email: "pedro@email.com",
//     password: "123456",
//     desc: "vendedor de produtos",
//     payment: 1,
//     delivery: 1,
//     tag: 1,
//     wpp: 1,
//   })

//   .then((data) => {
//     console.log(data.errors);
//     sequelize.close();
//   });

// repository.getAll().then((data) => {
//   console.log(data);
//   sequelize.close();
// });

repository.getById("10").then((data) => {
  console.log(data);
  sequelize.close();
});
