const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("categoria", {

  id_categoria: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true,
    autoIncrement: true
  },

  nombre: Sequelize.STRING(45),
  color: Sequelize.STRING(6)


});