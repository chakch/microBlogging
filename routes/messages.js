var messageDomain = require('../domain/message');

exports.findAllMessage = function(req,res,next){
    var user    = req.params.name;

    messageDomain.findAllMessage(user)
		.then(users => {
			res.send(users);
		})
		.catch(err => {
			res.status(400).send(err);
		})
}
exports.getAllMessages = function(req,res,next){
    var user    = req.params.name;
    messageDomain.findAllMessage(user)
		.then(users => {
			res.send(users);
		})
		.catch(err => {
			res.status(400).send(err);
		})
}
