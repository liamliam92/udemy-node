const mysql = require('mysql');

const dbConfig = {
	host: 'localhost',
	user: 'root',
	password: 'Peggysue232',
	database: 'post_app',
	insecureAuth: true
}

let connection; 

function handleDisconnect() {
	connection = mysql.createConnection(dbConfig);
	
/*	connection.connect((err) => {
		if (err) {
			console.log('DB Connection error...', err);
			setTimeout(handleDisconnect, 2000);
		}	
	});
*/
	connection.on('error', (err) => {
		console.log('DB error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
}

handleDisconnect();

module.exports = connection;
