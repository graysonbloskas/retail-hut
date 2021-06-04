const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
  username: { type: String, required: true, trim: true },

  email: { type: String, required: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"] },

  password: { type: String, required: true, trim: true},
  
  
  firstName: { type: String, required: true, trim: true},

  lastName: { type: String, require: true, trim: true}, 


});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}
module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) throw err;
    callback(null, isMatch);
  });
}
