var express    	= require('express');
var app        	= express();
var bodyParser 	= require('body-parser');

var port = 3000;

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());
var routes = require('./routes/routes');
var router = express.Router();
routes.assignRoutes(router);
app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);

	

