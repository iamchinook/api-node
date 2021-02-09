var express = require('express');
var router = express.Router();
const db = require('../models/database');

exports.ExisteApp = function(req, res, next){
  db.query("SELECT IdTabla FROM AppsInstaladas WHERE mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.send(result); 
  })
}

exports.ExisteArp = function(req, res, next){
  db.query("SELECT id FROM ArpUsuario WHERE macPc = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteCredencial = function(req, res, next){
  db.query("SELECT count(*) FROM users WHERE dni = ? AND cod_unidad = ?", [req.body.usuarioDni, req.body.usuarioCodigo], function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteEstadoPC = function(req, res, next){
  db.query("SELECT Id_Data FROM UsuarioData WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteEventoDef = function(req, res, next){
  db.query("SELECT IdTabla FROM EventosDefender WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteHistorial = function(req, res, next){
  db.query("SELECT id FROM HistorialUsuario WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteHost = function(req, res, next){
  db.query("SELECT id FROM FileHost WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteProceso = function(req, res, next){
  db.query("SELECT id FROM ProcesoUsuario WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExistePuerto = function(req, res, next){
  db.query("SELECT id FROM PuertosUsuario WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.ExisteUsuario = function(req, res, next){
  db.query("SELECT permiso FROM users WHERE dni = ? AND usuario = ?", [req.body.usuarioDni, req.body.usuarioNombre], function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.DelApps = function(req, res, next){
  db.query("DELETE FROM AppsInstaladas WHERE IdTabla = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.DelArp = function(req, res, next){
  db.query("DELETE FROM ArpUsuario WHERE id = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.DelDefender = function(req, res, next){
  db.query("DELETE FROM EventosDefender WHERE IdTabla = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.DelHistorial = function(req, res, next){
  db.query("DELETE FROM HistorialUsuario WHERE id = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.DelProceso = function(req, res, next){
  db.query("DELETE FROM ProcesoUsuario WHERE id = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.DelPuerto = function(req, res, next){
  db.query("DELETE FROM PuertosUsuario WHERE id = ?", req.body.idDel, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({result}) : res.json(result); 
  })
}

exports.GetIdData = function(req, res, next){
  db.query("SELECT Id_Data FROM UsuarioData WHERE Mac = ?", req.body.dirMac, function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json({"response": false}) : res.json(result); 
  })
}

exports.SetApps = function(req, res, next){
  var dir = req.body.dir
  var values = [req.body.Mac, req.body.Nombre, req.body.Editor, req.body.Fecha, req.body.Version, req.body.Ubicacion, req.body.FechaSubida];
  if(dir == '0'){
      db.query("INSERT INTO AppsInstaladas (Mac, Nombre, Editor, Fecha, Version, Ubicacion, FechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE AppsInstaladas SET Mac = ?, Nombre = ?, Editor = ?, Fecha = ?, Version = ?, Ubicacion = ?, FechaSubida = ? WHERE IdTabla = ?", [req.body.Mac, req.body.Nombre, req.body.Editor, req.body.Fecha, req.body.Version, req.body.Ubicacion, req.body.FechaSubida, req.body.dir], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": false}) : res.json(result); 
    })
  }
}

exports.SetArps = function(req, res, next){
  var idArp = req.body.idArp
  var values = [req.body.macPc, req.body.direccionIP, req.body.direccionMac, req.body.tipo, req.body.fechaSubida];
  if(idArp == '0'){
      db.query("INSERT INTO ArpUsuario (macPc, direccionIP, direccionMac, tipo, fechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE ArpUsuario SET macPc = ?, direccionIP = ?, direccionMac = ?, tipo = ?, fechaSubida = ? WHERE id = ?", [req.body.macPc, req.body.direccionIP, req.body.direccionMac, req.body.tipo, req.body.fechaSubida, req.body.idArp], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetData = function(req, res, next){
  var idData = req.body.idData
  var values = [req.body.sistemaOS, req.body.arquitectura, req.body.nombrePC, req.body.servicePack, req.body.osEstado, req.body.carpetasCompartidas, req.body.redDescripcion, req.body.direccionIP, req.body.mascara, req.body.puertaEnlace, req.body.mac, req.body.dns1, req.body.dns2, req.body.dominio, req.body.adaptadoresRed, req.body.procesador, req.body.ram, req.body.almacenamiento, req.body.tarjetaGrafica, req.body.impresora, req.body.periferico, req.body.usuarioActual, req.body.usuarioTodos, req.body.fechaLogin, req.body.fechaAnalisis, req.body.difernciaHora, req.body.cod_unidad, req.body.version_aipad, req.body.esVM];
  if(idData == '0'){
      db.query("INSERT INTO UsuarioData (SistemaOS, Arquitectura, NombrePC, ServicePack, OsEstado, CarpetasCompartidas, RedDescripcion, DireccionIP, Mascara, PuertaEnlace, Mac, Dns1, Dns2, Dominio, AdaptadoresRed, Procesador, Ram, Almacenamiento, TarjetaGrafica, Impresora, Periferico, UsuarioActual, UsuarioTodos, FechaLogin, FechaAnalisis, DiferenciaHora, cod_unidad, version_aipad, esVirtualMachine) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE UsuarioData SET SistemaOS = ?, Arquitectura = ?, NombrePC = ?, ServicePack = ?, OsEstado = ?, CarpetasCompartidas = ?, RedDescripcion = ?, DireccionIP = ?, Mascara = ?, PuertaEnlace = ?, Mac = ?, Dns1 = ?, Dns2 = ?, Dominio = ?, AdaptadoresRed = ?, Procesador = ?, Ram = ?, Almacenamiento = ?, TarjetaGrafica = ?, Impresora = ?, Periferico = ?, UsuarioActual = ?, UsuarioTodos = ?, FechaLogin = ?, FechaAnalisis = ?, DiferenciaHora = ?, cod_unidad = ?, version_aipad = ?, esVirtualMachine = ? WHERE Id_Data = ?", [req.body.sistemaOS, req.body.arquitectura, req.body.nombrePC, req.body.servicePack, req.body.osEstado, req.body.carpetasCompartidas, req.body.redDescripcion, req.body.direccionIP, req.body.mascara, req.body.puertaEnlace, req.body.mac, req.body.dns1, req.body.dns2, req.body.dominio, req.body.adaptadoresRed, req.body.procesador, req.body.ram, req.body.almacenamiento, req.body.tarjetaGrafica, req.body.impresora, req.body.periferico, req.body.usuarioActual, req.body.usuarioTodos, req.body.fechaLogin, req.body.fechaAnalisis, req.body.difernciaHora, req.body.cod_unidad, req.body.version_aipad, req.body.esVM, req.body.idData], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetEventos = function(req, res, next){
  var dir = req.body.dir
  var values = [req.body.mac, req.body.id, req.body.nivel, req.body.fecha, req.body.detalle, req.body.fechaSubida];
  if(dir == '0'){
      db.query("INSERT INTO EventosDefender (Mac, IdEvento, Nivel, Fecha, Detalle, FechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE EventosDefender SET Mac = ?, IdEvento = ?, Nivel = ?, Fecha = ?, Detalle = ?, fechaSubida = ? WHERE IdTabla = ?", [req.body.mac, req.body.id, req.body.nivel, req.body.fecha, req.body.detalle, req.body.fechaSubida, req.body.dir], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetHistorial = function(req, res, next){
  var idHist = req.body.idHist
  var values = [req.body.macPc, req.body.nav, req.body.title, req.body.dirUrl, req.body.conta, req.body.fecha];
  if(idHist == '0'){
      db.query("INSERT INTO HistorialUsuario (mac, navegador, titulo, url, contador, fechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE HistorialUsuario SET mac = ?, navegador = ?, titulo = ?, url = ?, contador = ?, fechaSubida = ? WHERE id = ?", [req.body.macPc, req.body.nav, req.body.title, req.body.dirUrl, req.body.conta, req.body.fecha, req.body.idHist], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetHost = function(req, res, next){
  var idHost = req.body.idHost
  var values = [req.body.mac, req.body.texto, req.body.fechaSubida];
  if(idHost == '0'){
      db.query("INSERT INTO FileHost (mac, texto, fechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE FileHost SET mac = ?, texto = ?, fechaSubida = ? WHERE id = ?", [req.body.mac, req.body.texto, req.body.fechaSubida, req.body.idHost], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetProceso = function(req, res, next){
  var idProceso = req.body.idProceso
  var values = [req.body.mac, req.body.pid, req.body.detalle, req.body.proceso, req.body.fechaSubida];
  if(idProceso == '0'){
      db.query("INSERT INTO ProcesoUsuario (mac, pid, detalle, proceso, fechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE ProcesoUsuario SET mac = ?, pid = ?, detalle = ?, proceso = ?, fechaSubida = ? WHERE id = ?", [req.body.mac, req.body.pid, req.body.detalle, req.body.proceso, req.body.fechaSubida, req.body.idProceso], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.SetPuertos = function(req, res, next){
  var idPuerto = req.body.idPuerto
  var values = [req.body.mac, req.body.protocolo, req.body.ipLocal, req.body.puertoLocal, req.body.ipRemoto, req.body.puertoRemoto, req.body.estado, req.body.fechaSubida];
  if(idPuerto == '0'){
      db.query("INSERT INTO PuertosUsuario (mac, protocolo, ipLocal, puertoLocal, ipRemoto, puertoRemoto, estado, fechaSubida) VALUES (?)", [values], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": result.insertId}) : res.json({"response": result.insertId}); 
    })
  } else {
    db.query("UPDATE PuertosUsuario SET mac = ?, protocolo = ?, ipLocal = ?, puertoLocal = ?, ipRemoto = ?, puertoRemoto = ?, estado = ?, fechaSubida = ? WHERE id = ?", [req.body.mac, req.body.protocolo, req.body.ipLocal, req.body.puertoLocal, req.body.ipRemoto, req.body.puertoRemoto, req.body.estado, req.body.fechaSubida, req.body.idPuerto], function(error,result,fields){
      (error!==null) ? res.send(error): console.log();
      (!result.length) ? res.json({"response": true}) : res.json(result); 
    })
  }
}

exports.UpdateEstadoPC = function(req, res, next){
  db.query("UPDATE UsuarioData SET ping = ? WHERE Id_Data = ?", [req.body.pingi, req.body.id] , function(error,result,fields){
    (error!==null) ? res.send(error): console.log();
    (!result.length) ? res.json(result) : res.json(result); 
  })
}

module.export = router;