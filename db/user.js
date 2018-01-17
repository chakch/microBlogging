var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.set('debug', true);

var MessageSchema   = new Schema({
    text      : String,
    date    : Date
});
var UserSchema   = new Schema({
    name      : String,
    prenom    : String,
	messages  : [MessageSchema]
},{ usePushEach: true });

var User = mongoose.model('User',UserSchema,"users");
exports.User = User;


exports.findAllUsers = function(){
	return new Promise(function(resolve,reject){
		db_tools.DBConnectMongoose();
		console.info("[USER] find all");
		User.find(function(err,users){
			if(err) {
				console.log(err);
				reject(err);
			}
			console.log(users);
			resolve(users);
		})		
	})
}

var findUser = function(userName){
    return new Promise(function(resolve,reject){
        db_tools.DBConnectMongoose();
        console.info("[USER] find user" , userName);
        User.findOne({'name' : userName})
            .exec(function(err,users){
                if(err) {
                    console.log(err);
                    reject(err);
                }
                console.log(users);
                resolve(users);
            })
    })
}
exports.findUser = findUser;

exports.updateUser = function(userName,text){
    return new Promise(function(resolve,reject){
        db_tools.DBConnectMongoose();
        console.info("[USER] update user" , userName);
        var query = {name : userName};
        var message = {
            text : text,
            date : new Date()
        }
       User.findOne(query,function(err,doc){
            if(err) {
                console.log(err);
                reject(err);
            }
           console.log(doc);
           doc.messages.push(message);
           doc.save(function (err) {
                if(err) reject(err);
                resolve(doc);
            });
        })
    })
}

