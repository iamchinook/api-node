const mysql = require('mysql');
const login = require('../config/database');
const db =  mysql.createConnection(login);

db.connect(function (err){
    console.log("|*|*|*|  API |*|*|*|");
    (err) ? (console.log(err)) : console.log('*** Base de Datos Conectada ***');
});

module.exports = db;