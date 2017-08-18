var Sequelize = require('sequelize');

var dbConnection = new Sequelize('pickupride', '', '', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432'
});
console.log('here?!?!');

dbConnection.sync();
module.exports = {
  connection: dbConnection
}