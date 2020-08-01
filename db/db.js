const {
    Sequelize
} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION
});

try {
    sequelize.authenticate();
    console.log('Connection has been established succesfully');
} catch (err) {
    console.log('Unable to connect to database: ', err);
}

module.exports = sequelize;