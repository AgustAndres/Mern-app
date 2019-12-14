const express = require ("express");
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const cors=require("cors");
const router = require("./routes");
const port = process.env.PORT || 5000;
const app = express();
const passport = require('./auth/passport');
////////////////////////////////////////////////////////////////////////////////nombre del sv
mongoose.connect('mongodb+srv://agus123:123@inetcluster-139ad.gcp.mongodb.net/cities?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true } ,function (err) {

  if (err) throw err;

  console.log('Successfully connected');
});


app.listen(port, () => console.log(`Server running on port ${port}`));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true} ));
app.use(cors());
app.use('/', router);
app.use(passport.initialize());


// app.use(function(req, res, next) {   
//     console.log(req.method, req.url);
//     next(); 
// });  

const FacebookStrategy = require("passport-facebook").Strategy;
  const GoogleStrategy = require("passport-google-oauth20").Strategy;
  const keys = require("./config");
  const chalk = require("chalk");
  let user = {};
  
  passport.serializeUser((user, cb) => {
      cb(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
      cb(null, user);
  });
  
  app.use(passport.initialize());
  
  // Facebook Strategy
  passport.use(new FacebookStrategy({
      clientID: keys.FACEBOOK.clientID,
      clientSecret: keys.FACEBOOK.clientSecret,
      callbackURL: "/login2/facebook/callback"
  },
      (accessToken, refreshToken, profile, cb) => {
          console.log(chalk.blue(JSON.stringify(profile)));
          user = { ...profile };
          return cb(null, profile);
      }));
  
  app.get("/login2/facebook", passport.authenticate("facebook"));
  app.get("/login2/facebook/callback",
      passport.authenticate("facebook"), 
          (req, res) => {
              res.redirect("/CitiesPage");
          });
  
  // Google Strategy
  passport.use(new GoogleStrategy({
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackURL: "/login2/google/callback"
  },
      (accessToken, refreshToken, profile, cb) => {
          console.log(chalk.blue(JSON.stringify(profile)));
          user = { ...profile };
          return cb(null, profile);
      }));
      
  app.get("/login2/google", passport.authenticate("google", {
      scope: ["profile", "email"]
  }));
  app.get("/login2/google/callback",
      passport.authenticate("google"), 
          (req, res) => {
              res.redirect("/CitiesPage");
          });
  
  app.get("/user", (req, res) => {
      console.log("Getting user data!");
      res.send(user);
  });
  
  app.get("/logout", (req, res) => {
      console.log("Logging out!");
      user = {};
      res.redirect("/");
  })
