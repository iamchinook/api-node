var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var bodyparser = require('body-parser');
const bd = require('../models/database');

router.use(bodyparser.urlencoded({extended: true}));
router.use(bodyparser.json());

module.exports = function (req, res, next) {
    var token = req.headers['authorization'];
    (typeof token !== 'undefined') ? (
        token = token.replace('result ', ''),
        console.log("Identificando token..."),
        jwt.verify(token, 'Token', function(err, token) {
            (err!==null) ? (console.log("*** Error de acceso ***"), res.sendStatus(403,"*** Error de acceso ***")) : (console.log("*** Acceso autorizado ***"), next())
        })
    ) : (
        console.log("*** Acceso sin token no permitido ***"),
        res.send(403).body("*** Acceso sin token no permitido ***")
    )
}