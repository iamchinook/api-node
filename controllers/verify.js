var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
const bd = require('../models/database');

router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json());

exports.get_verify = function (req, res, next){
     var token = req.headers['authorization']
     if(!token){
          res.status(401).send({
          error: "*** Es necesario el token de autenticación ***"
          })
     return
     }

     token = token.replace('Bearer ', '')
     jwt.verify(token, 'Token', function(err, token) {
          if (err) {
               return res.status(401).send({
                    ok: false,
                    message: '*** Token inválido ***'
                  });
          } else {
               res.status(200).send({
                    ok: true,
                    message: '*** Token valido ***'
                  });
               }
     })
}
module.export = router;
