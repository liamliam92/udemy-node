const EventEmmiter = require('events');
const Logger = require('./logger');
const logger = new Logger();
const http = require('http');
const underscore = require('underscore');


const testArr = [1, 2, "tits"];

console.log(underscore.contains(testArr, "tits"));

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write("Yo");
		res.end();
	}
});


server.listen(3000);

console.log("Listening on port 3000");

logger.on('messageLogged', (event) => {
	console.log(event);
});

logger.log('message');
