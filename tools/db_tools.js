var mongoose = require('mongoose');
var db ;
var dbURI = 'mongodb://127.0.0.1:27017/chatdb';


mongoose.set('debug', true);
exports.DBConnectMongoose = function(){
	if(db) return db;
	db = mongoose.connect(dbURI, { useMongoClient: true });
}

mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 