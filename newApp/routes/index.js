module.exports = (app) => {
	let indexCtrl = require('../controllers/index');
	
	app.route('/')
		.get((req, res) => {
			indexCtrl.listAllPosts(req, res);
		});
}
