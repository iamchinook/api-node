var express = require('express');
var router = express.Router();
var tokenController = require('../controllers/token');
var verifyController = require('../controllers/verify');
var auditController = require('../controllers/audit');
var auth = require('../controllers/auth');

router.get('/', function(req, res, next) {
     res.render('index', { title: 'API', user: req.user });
   });

// ACCESO
router.post('/get_token', tokenController.get_token);
router.post('/get_verify', verifyController.get_verify);

// SELECT

router.post('/existe_app', auth, auditController.ExisteApp);
router.post('/existe_arp', auth, auditController.ExisteArp);
router.post('/existe_credencial', auth, auditController.ExisteCredencial);
router.post('/existe_estadopc', auth, auditController.ExisteEstadoPC);
router.post('/existe_eventodef', auth, auditController.ExisteEventoDef);
router.post('/existe_historial', auth, auditController.ExisteHistorial);
router.post('/existe_host', auth, auditController.ExisteHost);
router.post('/existe_proceso', auth, auditController.ExisteProceso);
router.post('/existe_puerto', auth, auditController.ExistePuerto);
router.post('/existe_usuario', auth, auditController.ExisteUsuario);

// DELETE

router.post('/del_apps', auth, auditController.DelApps);
router.post('/del_arp', auth, auditController.DelArp);
router.post('/del_defender', auth, auditController.DelDefender);
router.post('/del_historial', auth, auditController.DelHistorial);
router.post('/del_proceso', auth, auditController.DelProceso);
router.post('/del_puerto', auth, auditController.DelPuerto);

// GET

router.post('/get_iddata', auth, auditController.GetIdData);

// SET

router.post('/set_apps', auth, auditController.SetArps);
router.post('/set_arps', auth, auditController.SetArps);
router.post('/set_data', auth, auditController.SetData);
router.post('/set_eventos', auth, auditController.SetEventos);
router.post('/set_historial', auth, auditController.SetHistorial);
router.post('/set_host', auth, auditController.SetHost);
router.post('/set_proceso', auth, auditController.SetProceso);
router.post('/set_puertos', auth, auditController.SetPuertos);

router.post('/update_estadopc', auth, auditController.UpdateEstadoPC);

















//router.get('/audit', auth, auditController.audit);



module.exports = router;
