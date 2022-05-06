const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("problema_asignado", {

  id_problema_asignado: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true
  },

  resuelto: Sequelize.INTEGER(11),
  codigo_fuente: Sequelize.TEXT,
  analisis: Sequelize.TEXT,
  id_usuario: Sequelize.STRING(100),
  id_problema_catalogo: Sequelize.INTEGER(11)

});