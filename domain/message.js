var usersDB = require('../db/user');
exports.findAllMessage = function(userName){
    return new Promise(function(resolve,reject){
        usersDB.findUser(userName)
            .then(user => {
            resolve(user.messages);
        })
        .catch(err => {
            reject(err);
        })
    })
}
exports.findAllMessage = function(){
    return new Promise(function(resolve,reject){
        usersDB.findAllUsers()
            .then(users => {
            var messages = users.map(a => a.messages);
            console.log(messages);
            resolve(messages);
            })
            .catch(err => {
            reject(err);
            })
        })
}