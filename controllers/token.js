var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
var crypto    = require('crypto');
const db = require('../models/database');

router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json());

exports.get_token = function (req, res){
     var key = req.body.key
     var uu = req.body.uu
     
     db.query("SELECT hash FROM users WHERE hash = ?", key, function (err, result, fields) {
          if (err) throw err;
          console.log("*** Usuario no autorizado ***");
          

          hmac = crypto.createHmac('sha256', result[0].hash);
          hmac.update(key);
          new_hash = hmac.digest('hex');
     
          if (key == result[0].hash){
               var hash = result[0].hash
               var tokenData = {
                    key: key,
                    hash: result[0].hash,
                    uu: uu,
                    new_hash: new_hash
               }
               var token = jwt.sign(tokenData, 'Token', {
                    expiresIn: 60 * 60 * 12
                    })
               res.send({
                    token                    
                    })
               }else{
                    console.log("*** Validación incorrecta ***");
               }
     });
}

module.export = router;