const {
    Sequelize
} = require('sequelize');
require('dotenv').config();


const database = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION
});

database.authenticate()
    .then(() => console.log('Database connected succesfullly.'))
    .catch(err => console.log(`Error: ${err}`));

module.exports = database;