const Sequelize = require("sequelize");

const sequelize = new Sequelize("bjwrle7upim7d52gz4hq", 'uoyqz6nyjjei2nwq', 'h68AZmtT6PZva0nhe4si', {host: 'bjwrle7upim7d52gz4hq-mysql.services.clever-cloud.com',
dialect: "mysql", operatorAliases: false})

module.exports = sequelize;
global.sequelize = sequelize;
