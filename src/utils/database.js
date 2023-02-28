//CONEXION A LA BASE DE DATOS
const {Sequelize} = require('sequelize');

const db = new Sequelize({
    database: 'tasks',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: 'kioto09A',
    dialect: 'postgres'
});

module.exports = db;