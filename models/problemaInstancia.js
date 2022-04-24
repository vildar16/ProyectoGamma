const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("problemaInstancia", {

  id_problemaInstancia: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    allowNull: false, 
    primaryKey: true
  },

  resuelto: Sequelize.INTEGER(11),
  link: Sequelize.STRING(200),
  id_usuario: Sequelize.STRING(100),
  id_problema_catalogo: Sequelize.INTEGER(11),
  id_metodo_resolucion: Sequelize.INTEGER(11)

});