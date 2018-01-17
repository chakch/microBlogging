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
exports.findUser = function(userName){
	return new Promise(function(resolve,reject){
		usersDB.findUser(userName)
			.then(users => {
				resolve(users);
			})
			.catch(err => {
				console.log(err);
				reject(err);
			})
	})
}

exports.updateUser = function(userName,message){
    return new Promise(function(resolve,reject){
        usersDB.updateUser(userName,message)
            .then(users => {
            resolve(users);
    		})
			.catch(err => {
					console.log(err);
				reject(err);
			})
    })
}