'use strict';
const model = require('../models/index.js');

exports.listAllPosts = (req, res) => {
	model.allPosts((err, rowSet) => {
		res.render('../views/index', {results: rowSet});
	});
}
