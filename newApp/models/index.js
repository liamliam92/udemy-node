'use strict';
const db = require('./dbconnection');

module.exports.allPosts = (result) => {
	db.query("SELECT * FROM posts", (err, res) => {
		if(err) result(null, err);
		else result(null, res);
	});
}
