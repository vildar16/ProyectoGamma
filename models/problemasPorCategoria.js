const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("problema_x_categoria", {

    id_categoria: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },

    id_problema: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
    }

});