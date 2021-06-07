const app= require("express").Router()
const passport=require("passport");
const {User} = require("../../models");
// Register User
var LocalStrategy = require('passport-local').Strategy;
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'Unknown User'});
      }
      User.comparePassword(password, user.password, function(err, isMatch){
        if(err) throw err;
     	if(isMatch){
     	  return done(null, user);
     	} else {
     	  return done(null, false, {message: 'Invalid password'});
     	}
     });
   });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
      done(err, user);
    });
  });


app.post('/register', function(req, res){
    var password = req.body.password;
    
  
    
      var newUser = new User(req.body);
      console.log(req.body);
  
      User.createUser(newUser, function(err, user){
        if(err) throw err;
        res.send(user).end()
      });
   

  });
  // Endpoint to login
app.post('/login',
  passport.authenticate('local'),

  function(req, res) {
    console.log(req.body)
    res.send(req.body);
  }

);

// Endpoint to get current user
app.get('/current', function(req, res){
  res.send(req.user);
})


// Endpoint to logout
app.get('/logout', function(req, res){
  req.logout();
  res.send(null)
});
  module.exports = app;