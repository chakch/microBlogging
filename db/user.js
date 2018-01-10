var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

mongoose.set('debug', true);

var UserSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('users',UserSchema);