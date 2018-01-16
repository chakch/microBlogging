var db_tools = require('../tools/db_tools');
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

mongoose.set('debug', true);

var UserSchema   = new Schema({
    name   : String,
    prenom : String
});

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
  var Projection = {
        __v    	: false,
        _id    	: false,
        name 	: true,
         //you can add many parameters here for projection
    };
exports.findUser = function(userName){
	return new Promise(function(resolve,reject){
		db_tools.DBConnectMongoose();
		console.info("[USER] find user" , userName);
		User.findOne({'name' : userName})
		.select('name prenom ')
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