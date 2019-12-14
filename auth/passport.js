const passport = require('passport');
const passportJwt = require('passport-jwt');

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
// const User = require('../Models/User')
const key = require("./secret");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey;

passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
        User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
)

  const express = require("express");
  const FacebookStrategy = require("passport-facebook").Strategy;
  const GoogleStrategy = require("passport-google-oauth20").Strategy;
  const keys = require("../config");
  const chalk = require("chalk");
  let user = {};
  
  passport.serializeUser((user, cb) => {
      cb(null, user);
  });
  
  passport.deserializeUser((user, cb) => {
      cb(null, user);
  });
  
  const app = express();
  
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
              res.redirect("/profile");
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
              res.redirect("/profile");
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

module.exports = passport;