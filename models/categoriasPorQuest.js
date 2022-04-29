const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("categorias_x_quest", {

  id_sesion: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },
  
  id_categoria: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  }

});