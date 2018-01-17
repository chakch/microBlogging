var users   = require('./users');
var messages   = require('./messages');


exports.assignRoutes = function(app){

	app.get('/users',users.getAllUsers);

	app.get('/user/:name',users.getUser);

	app.get('/:name/messages',messages.findAllMessage);

	app.post('/:name/message',users.insertMessage);

    app.get('/messages',messages.findAllMessage);


}