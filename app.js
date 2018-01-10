var MongoClient = require('mongodb').MongoClient
var assert      = require('assert');
var express    	= require('express');
var app        	= express();
var bodyParser 	= require('body-parser');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var port = 3000;

var router = express.Router();


app.listen(port);
console.log('Magic happens on port ' + port);
// Connection URL

var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost:27017');
console.log(connection);
var User = require('./db/user.js');
console.log(User);
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
mongoose.set('debug', true);

router.route('/users')
	.post(function(req,res){
		var user = new User();
		user.name = 'mohamed';
		user.save(function(err){
			if(err) res.send(err);
			res.json({message: 'user created'})
		})
	})
	.get(function(req,res){

		console.log("get on api/users");		
		user.find({},function(err,users){
			if(err) res.send(err);
			console.log(users);		
			res.json(users);
		})
	});
app.use('/api', router);
