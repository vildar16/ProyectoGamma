const { DATE } = require("mysql/lib/protocol/constants/types");
const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("usuario_accion_usuario", {

  id_problema: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  id_usuario_emisor: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  id_usuario_receptor: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  id_metodo_resolucion: {
    type: Sequelize.INTEGER(11),
    allowNull: false, 
    primaryKey: true
  },

  timestamp: Sequelize.DATE,

  tiempo: Sequelize.INTEGER(11),

  efectuo: Sequelize.INTEGER(11)
  
});