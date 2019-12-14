const express = require('express');
const router = express.Router;


// Importamos la KEy
const key = require('Key..');
// Dependencia Json web tokens
const jwt = require('jsonwebtoken');

// Necesito el modelo de nuestro usuario (mongodb)
usuarioModel = require('.../modelo');
const userImport = require("../Models/User")
// Defino la ruta donde se hará la autenticación
router.post('/auth/login', (req, res) => {
  // Comprobamos si existe el usuario
  userImport.findOne({ username: req.body.username }).then(user => {
    if (!user) {
      return res.send({ message: 'NO existe el usuario' });
    }

    if (user.password == req.body.password) {
      const payload = {
        id: user_id,
        userName: user.userName
      };

      // Cuanto tiempo va a durar nuestro token
      const options = {
        expiresIn: 604800
      };
      jwt.sign(
        payload,
        options,
        key.secretOrKey,
        (err,
        token => {
          if (err) {
            res.json({ succes: false, token: 'Error' });
          } else {
            res.json({ succes: true, token: token });
          }
        })
      );
    } else {
      res.send({ message: 'La constraseña es inválida' });
    }
  });
});