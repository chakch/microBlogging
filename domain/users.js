var usersDB = require('../db/user');
exports.findAllUsers = function(){
	return new Promise(function(resolve,reject){
		usersDB.findAllUsers()
			.then(users => {
				resolve(users);
			})
			.catch(err => {
				reject(err);
			})
	})
}
exports.findUser = function(){
	return new Promise(function(resolve,reject){
		usersDB.findUser()
			.then(users => {
				resolve(users);
			})
			.catch(err => {
				console.log(err);
				reject(err);
			})
	})
}