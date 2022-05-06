const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("usuarios_x_quest", {

  id_usuario: {
    type: Sequelize.STRING(100),
    allowNull: false, 
    primaryKey: true
  },
  
  id_sesion: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  }

});