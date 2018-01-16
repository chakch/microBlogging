var usersDomain = require('../domain/users');

exports.getAllUsers = function(req,res,next){
	usersDomain.findAllUsers()
		.then(users => {
			res.send(users);
		})
		.catch(err => {
			res.status(400).send(err);
		})
}
exports.getUser = function(req,res,next){
	console.log(req.params.name);
	usersDomain.findUser()
		.then(user => {
			res.status(200).send(user);
		})
		.catch( err =>{
			res.status(400).end(err);
		})
}