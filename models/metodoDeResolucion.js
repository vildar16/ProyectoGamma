const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("metodoDeResolucion", {

  id_metodo_resolucion: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true
  },

  nombre_metodo_resolucion: Sequelize.STRING(45)


});