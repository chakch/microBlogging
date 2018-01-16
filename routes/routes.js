var users = require('./users');


exports.assignRoutes = function(app){
	app.get('/users',users.getAllUsers);

	app.get('/user/:name',users.getUser);
} 