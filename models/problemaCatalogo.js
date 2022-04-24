const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("problemaCatalogo", {

  id_problema: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  nombre: Sequelize.STRING(45),
  link: Sequelize.STRING(200)


});