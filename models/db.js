var mysql = require('mysql');

var db = {};

db.connect = function() {
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'tas'
    });
    connection.connect();
    return connection;
}

module.exports = db;
