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
	var userName = req.params.name;
	usersDomain.findUser(userName)
		.then(user => {
			res.status(200).send(user);
		})
		.catch( err =>{
			res.status(400).end(err);
		})
}


exports.insertMessage = function(req,res,next){
    var user    = req.params.name;
    var message = req.body.message;
    console.log("user name :",user);
    console.log("user message:",message);

    usersDomain.updateUser(user,message)
        .then(user => {
        res.status(200).send(user);
		})
		.catch( err =>{
        res.status(400).end(err);
		})
}