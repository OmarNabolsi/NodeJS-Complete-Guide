const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "p@ssw0rd", {
  dialect: "mysql",
  host: "localhost"
});


module.exports = sequelize;