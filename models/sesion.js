const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("sesion", {

  codigo_sesion: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  nombre_sesion: Sequelize.STRING(100)


});