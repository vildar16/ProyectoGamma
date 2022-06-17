const Sequelize = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("ganancias_x_usuario_x_quest", {

    id_quest: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true
    },

    id_categoria: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true 
    },

    id_usuario: {
        type: Sequelize.STRING(100),
        allowNull: false,
        primaryKey: true
    },

    monedas: {
        type: Sequelize.FLOAT(11),
        allowNull: false
    },


    globos: {
        type: Sequelize.FLOAT(11),
        allowNull: false
    }


});