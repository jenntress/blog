// blog/routes/auth.js

const User = require('../models/user');


module.exports = function(app, passport){


//****** SIGN UP ********
  app.post('/api/signup', function(req, res, next){
    console.log('FOUND SIGNUP ROUTE');
    const authenticator = passport.authenticate('local-signup', function(err, user, info){
      if(err) return next(err); //res.send sends back anything you want (not just raw json specific data)
      if(!user){
        return res.status(404).json(info.message) //"user name already taken" AND "blank username"
      } else {
        user.save(function(err){
          if(err) throw err;  //this is a mongoose error (this stops the program from working)
          req.logIn(user, function(err){
            if(err) res.json({error: err.message});
            return res.json(user);
          })
        })
      }
    })
    authenticator(req, res, next);
  });


}//this ends the module.exports function
