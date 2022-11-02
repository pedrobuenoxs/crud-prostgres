require("dotenv").config();

const { user } = require("pg/lib/defaults");
const sequelize = require("./config/database");

//fazer conexão com o banco de dados
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const ProductRepository = require("./repository/product.repository");
const repository = new ProductRepository();

repository.getById("c1bab5d2-62bf-4f93-bc28-3988c34296b2").then((product) => {
  product.map((p) => {
    console.log(p.dataValues);
  });
});

const product = {
  id: "c1bab5d2-62bf-4f93-bc28-3988c34296b2",
  name: "Melancia",
  price: 0.5,
  measure: "unidade",
  status: 1,
  category: "frutas",
};

repository.create(product).then((products) => {
  console.log(products);
});

// -----------------------------

// const SellerRepository = require("./repository/seller.repository");
// const sellerrepository = new SellerRepository();

// sellerrepository
//   .create({
//     id: "c1bab5d2-62bf-4f93-bc28-3988c34296b2",
//     name: "Horta do Pedro",
//     desc: "Aqui você encontra as melhores hortalicas",
//     email: "horti@email.com",
//     password: "anypassword",
//     delivery: 101,
//     payment: 0,
//     tag: 5,
//     wpp: 0,
//   })
//   .then((seller) => {
//     console.log(seller);
//   });
