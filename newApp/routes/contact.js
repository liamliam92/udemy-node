module.exports = (app) => {
	app.route('/contact')
		.get((req, res) => res.render('../views/contact')); 			
}
