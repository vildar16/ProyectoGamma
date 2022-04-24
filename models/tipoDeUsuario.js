const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("tipoDeUsuario", {

  id_tipo_de_usuario: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  nombre_tipo_de_usuario: Sequelize.STRING(50)


});