const mysql = require('mysql');

var connection = mysql.createConnection({
	host: '',
	port: 3000,
	user: '',
	password: '',
	database: '',
	insecureAuth: true
});

connection.connect();

module.exports = connection;
