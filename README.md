# ***API***

*API desarrollada en Node.js, la cual se encarga de controlar los procedimientos realizados entre una aplicación desarrollado en .NET y la Base de Datos.*

## **Módulos de Acceso**

### • Obtener Token

> Mediante el envio del Código de Unidad y la Key correspondiente al usuario, se obtiene como respuesta un token con un tiempo de vida de 12 horas.

```bash
/get_token
```

##### Body
    {
        "uu": "",
        "key": "0943509941742695c2471c9618410442"
    }

##### Respuesta

    {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiIwOTQzNTA5OTQxNzQyNjk1YzI0NzFjOTYxODQxMDQ0MiIsImhhc2giOiIwOTQzNTA5OTQxNzQyNjk1YzI0NzFjOTYxODQxMDQ0MiIsInV1IjoiVTM2NDAiLCJuZXdfaGFzaCI6Ijg5NTJlZWE0MzZmYWY5ZDQ3NWVjZDRiYzkwMDY1YmE5YTQ3ZWRiNzgyMWRiYjZkNTY2ZDY1MWRjYmJkNDYwYTQiLCJpYXQiOjE2MTIzNTEwODYsImV4cCI6MTYxMjM5NDI4Nn0.x09cIFC_1qMlUcw8bwppH6XomK6r9ll3misdRp3Z1Tw"
    }

### • Comprobar Token

> Comprueba la autenticidad del token enviado

```bash
/get_verify
```

##### Header

    Key: Authorization
    Value: Token

##### Respuesta

    {
        "ok": true,
        "message": "*** Token valido ***"
    }

    or

    {
        "ok": false,
        "message": "*** Token inválido ***"
    }

## **Módulos de comprobación de existencia de datos**

> Todos los modulos requieren el token correspondiente. Reciben un dato especifico para comprobar su existencia en la base de datos, y responden los ID del campo deseado.

##### Header

    Key: Authorization
    Value: Token

### • App

```bash
/existe_app
```

##### Body

    {
        "dirMac": "08-00-27-5E-0B-BA"
    }

##### Respuesta

    [
        {
            "IdTabla": 6
        },
        {
            "IdTabla": 7
        }
    ]

### • ARP

```bash
/existe_arp
```


##### Body

    {
        "dirMac": "08-00-27-5E-0B-BA"
    }

##### Respuesta

    [
        {
            "id": 1
        },
        {
            "id": 2
        }
    ]

### • Credencial

```bash
/existe_credencial
```

##### Body

    {
        "usuarioDni": "DNI",
        "usuarioCodigo": ""
    }

##### Respuesta

    [
        {
            "count(*)": 1
        }
    ]

### • Estado PC

```bash
/existe_estadopc
```
##### Body

    {
    "dirMac": "8C-89-A5-1B-7C-FA"
    }

##### Respuesta

    [
        {
            "Id_Data": 100240
        }
    ]

### • Eventos Windows Defender

```bash
/existe_eventodef
```

##### Body

    {
    "dirMac": "8C-89-A5-1B-7C-FA"
    }

##### Respuesta

    [
        {
            "IdTabla": 5
        },
        {
            "IdTabla": 6
        }
    ]

### • Historial

```bash
/existe_historial
```

##### Body

    {
    "dirMac": "8C-89-A5-1B-7C-FC"
    }

##### Respuesta

    [
        {
            "id": 3270
        },
        {
            "id": 3271
        }
    ]

### • Host

```bash
/existe_host
```

##### Body

    {
        "dirMac": "6C-62-6D-45-D6-F2"
    }

##### Respuesta

    [
        {
            "id": 4
        }
    ]

### • Procesos

```bash
/existe_proceso
```

##### Body

    {
        "dirMac": "6C-62-6D-45-D6-F2"
    }

##### Respuesta

    [
        {
            "id": 474
        },
        {
            "id": 475
        }
    ]

### • Usuario

```bash
/existe_usuario
```
##### Body

    {
        "usuarioDni": "",
        "usuarioNombre": ""
    }

##### Respuesta

    [
        {
            "permiso": "3"
        }
    ]

### • Puertos

```bash
/existe_puerto
```
##### Body

    {
        "dirMac": "6C-62-6D-45-D6-F2"
    }

##### Respuesta

    [
        {
            "id": 3326
        },
        {
            "id": 3993
        }
    ]

## **Módulos de eliminación de datos**

> Todos los modulos requieren el token correspondiente. Reciben un id para comprobar su existencia en la base de datos, y responden 0 o 1 en el atributo affectedRows en caso de ser eliminado o no.

##### Header

    Key: Authorization
    Value: Token

##### Body

    {
        "idDel": "45"
    }

##### Respuesta

    {
        "result": {
            "fieldCount": 0,
            "affectedRows": 0 or 1,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "",
            "protocol41": true,
            "changedRows": 0
        }
    }

### • App

```bash
/del_apps
```

### • ARP

```bash
/del_arp
```

### • Windows Defender

```bash
/del_defender
```

### • Historial

```bash
/del_historial
```

### • Procesos

```bash
/del_proceso
```

### • Puertos

```bash
/del_puerto
```

## **Módulos de modificación de datos**

> Todos los modulos requieren el token correspondiente. Reciben un JSON con datos a insertar en la BD. En caso de realizar un update, pide un atributo especifico, que será explicado posteriormente.

##### Header

    Key: Authorization
    Value: Token

### • App

```bash
/set_apps
```

##### Body

    {
        "dir" : "0"
        "Mac": "D0-50-99-23-E2-36",
        "Nombre": "Testing",
        "Editor": "Testing",
        "Fecha": "28/09/2020",
        "Version": "2.0",
        "Ubicacion": "Archivosdeprograma",
        "FechaSubida": "28/09/2020"
    }

> Si `dir` es 0 realiza un INSERT, en caso contrario, UPDATE

### • ARP

```bash
/set_arps
```

##### Body

    {
        "idArp" : "0"
        "direccionMac": "D0-50-99-23-E2-35",
        "direccionIP": "192.168.0.1",
        "tipo": "dinámico",
        "FechaSubida": "28/09/2020"
    }

> Si `idArp` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Datos Host

```bash
/set_data
```

##### Body

    {
        "idData": "0",
        "sistemaOS": "Microsoft Windows 10 Pro",
        "arquitectura": "64 bits",
        "nombrePC": "NombrePC",
        "servicePack": "No tiene SP",
        "osEstado": "Licensed",
        "carpetasCompartidas": "ADMIN$",
        "redDescripcion": "Realtek PCIe GbE Family Controller",
        "direccionIP": "192.168.0.2",
        "mascara": "255.255.255.0",
        "puertaEnlace": "192.168.0.1",
        "mac":"00-00-00-00-00-00",
        "dns1": "8.8.8.8",
        "dns2": "1.1.1.1",
        "dominio": "EA",
        "adaptadoresRed": "Realtek PCIe GbE Family Controller",
        "procesador":  "AMD A8-7600 Radeon R7, 10 Compute Cores 4C+6G  ",
        "ram": "3.43 GB",
        "almacenamiento": "Nombre: TOSHIBA DT01ACA050 Tamaño: 465.76 GB",
        "tarjetaGrafica": "Nombre: AMD Radeon R7 Graphics Version: 26.20.12028.2",
        "impresora": "HP LaserJet P3011/P3015",
        "periferico": "Nombre: Dispositivo de entrada USB",
        "usuarioActual": "usuario",
        "usuarioTodos": "usuario",
        "fechaLogin":  "24/01/1991 09:00",
        "fechaAnalisis":  "24/01/1991 09:00",
        "diferenciaHora": "00d 00h 00m",
        "cod_unidad": "",
        "version_aipad":  "1.0.0.85",
        "esVM": "False"
    }

> Si `idData` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Windows Defender

```bash
/set_eventos
```

##### Body

    {
        "dir": "0",
        "mac": "8C-89-A5-1B-7C-FA",
        "id": "1002",
        "nivel": "Advertencia",
        "fecha": "1/10/2020 12:41:46",
        "detalle": "Testing",
        "fechaSubida": "1/10/2020 12:41:46"  
    }

> Si `dir` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Historial

```bash
/set_historial
```

##### Body

    {
        "idHist": "4223",
        "macPc": "8C-89-A5-1B-7C-FA",
        "nav": "Firefox Developer Edition",
        "title": "Testing2",
        "dirUrl": "google.com",
        "conta": "1",
        "fecha": "1/10/2020 12:41:46"  
    }

> Si `idHist` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Archivo Host

```bash
/set_host
```

##### Body

    {
        "idHost": "0",
        "mac": "8C-89-A5-1B-7C-FA",
        "texto": "This is a sample HOSTS file used by Microsoft TCP/IP for Windows."
        "fechaSubida": "1/10/2020 12:41:46"  
    }

> Si `idHost` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Procesos

```bash
/set_proceso
```

##### Body

    {
        "idProceso": "15096",
        "mac": "00-00-00-00-00",
        "pid": "1905",
        "detalle": "Testing2",
        "proceso": "Testing2",
        "fechaSubida": "1/10/2020 12:41:46"  
    }

> Si `idProceso` es 0 realiza un INSERT, en caso contrario, UPDATE

### • Puertos

```bash
/set_puertos
```

##### Body

    {
        "idPuerto": "0",
        "mac": "00-00-00-00-00",
        "protocolo": "TCP",
        "ipLocal": "192.168.0.1",
        "puertoLocal": "2547",
        "ipRemoto": "8.8.8.8",
        "puertoRemoto": "80",
        "estado": "0.0.0.0",
        "fechaSubida": "1/10/2020 12:41:46"  
    }

> Si `idPuerto` es 0 realiza un INSERT, en caso contrario, UPDATE

## **Módulos varios**

> Todos los modulos requieren el token correspondiente, y los mismos no pertenecen a ninguna de las categorias anteriores.

### • Puertos

```bash
/get_iddata
```

##### Body

    {
        "dirMac": "D0-50-99-23-E2-34"
    }

##### Respuesta

    [
        {
            "Id_Data": 1
        }
    ]

### • Actualizar estado del Host

```bash
/update_estadopc
```

##### Body

    {
        "pingi": "2020-11-27 09:45:00",
        "id": "5"
    }

##### Respuesta

    {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "(Rows matched: 0  Changed: 0  Warnings: 0",
        "protocol41": true,
        "changedRows": 0
    }


## **Comandos para utilización del Docker**

- Ver todas las imagenes de docker

```
    docker images -a
```

- Docker running

```
    docker ps
```

- Detener Docker

```
    docker stop <CONTAINER ID>
```

- Elimina todos los docker detenidos

```
    docker system prune -a
```

- Crear docker

```
    docker build -t api .
```

- Ejecutar la img

```
    docker  run -d  -p 4000:4000  api
```

- Ejecutar la img cada vez que inicia el servidor

```
    docker run -d --restart=always -p 4000:4000 api
```

- Ejecuta la img cada vez que inicia el servidor sin necesidad del dockerfile

```
    docker run -d --restart always -p 4000:4000 -v /home/user/api:/app --name api node sh -c "cd /app ; npm install; node index.js"
```