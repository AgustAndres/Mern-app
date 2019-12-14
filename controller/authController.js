const jwt = require('jsonwebtoken');
const key = require('../auth/secret');

const userImport = require("../Models/User")
var bcrypt = require('bcryptjs');
const passport = require('../auth/passport');


    logear = (req, res) => {
    userImport.findOne({ username: req.body.username }).then(user => {
      if (!user) {
        res.send({
          Message: 'Lo sentimos, no se ha encontrado un usuario con este username'
        });
        console.log('No existe usuario');
      }
      if (user) {
        console.log('Existe usuario');
        // console.log(user._id);
        bcrypt.compare(req.body.password, user.password, function(err, response) {
          if (response) {
            const payload = {
              id: user._id,
              username: user.username,
              img: user.img
            };
            const options = { expiresIn: 604800 };
  
            jwt.sign(payload, key.secretOrKey, options, (err, token) => {
              if (err) {
                res.json({
                  success: false,
                  token: 'There was an error'
                });
              } else {
                res.json({
                  success: true,
                  token: token
                });
              }
            });
          } else {
            res.send({ Message: 'Contraseña incorrecta' });
          }
        });
      } else {
        console.log('No existe usuario');
      }
    });
  };



authLogin = passport.authenticate('jwt', { session: false }),
(req, res) => {
  userImport
    .findOne({ _id: req.user.id })
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(404).json({ error: 'User does not exist!' }));
};
module.exports = {logear, authLogin}