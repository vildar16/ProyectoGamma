const Sequelize = require("sequelize");

const sequelize = new Sequelize("bjwrle7upim7d52gz4hq", 'uoyqz6nyjjei2nwq', 'h68AZmtT6PZva0nhe4si', {host: 'bjwrle7upim7d52gz4hq-mysql.services.clever-cloud.com',
dialect: "mysql","pool": {
    "maxConnections": 20,
    "maxIdleTime": 30000}, operatorAliases: false, define:{freezeTableName: true, createdAt: false, updatedAt: false}})

module.exports = sequelize;
global.sequelize = sequelize;
