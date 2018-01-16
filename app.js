var MongoClient = require('mongodb').MongoClient
var assert      = require('assert');
var express    	= require('express');
var app        	= express();
var bodyParser 	= require('body-parser');
var User 		= require('./db/user.js');
var mongoose 	= require('mongoose');

var db_tools = require('./tools/db_tools');

var port = 3000;


app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
var routes = require('./routes/routes');
var router = express.Router();
routes.assignRoutes(router);
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

	

