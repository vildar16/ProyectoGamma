const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("usuario", {

  nombre_usuario: {
    type: Sequelize.STRING(100),
    allowNull: false, 
    primaryKey: true
  },

  nombre: Sequelize.STRING(50),
  apellido1: Sequelize.STRING(50),
  apellido2: Sequelize.STRING(50),
  correo: Sequelize.STRING(200),
  password: Sequelize.STRING(300), 
  id_tipo_usuario: Sequelize.INTEGER(11),  



});