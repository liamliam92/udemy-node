module.exports = (app) => {
	app.route('/')
		.get((req, res) => res.render('../views/index', {mockDB: [1, 2, 3]}));
}
