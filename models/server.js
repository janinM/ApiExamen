const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const {dbConnection} = require('../database/config')

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.port 
        this.encuestasPath = '/api/encuestas'
        
        this.middlewares() 
        this.routes() 
        this.conectarDB() 
    }

    conectarDB() { 
        dbConnection() 
    }

    middlewares() { //Otras funcionalidades
        this.app.use( cors() )
        this.app.use( express.static('public') )
        this.app.use( express.json() ) 

    }

    routes() { //Rutas de la aplicación
        this.app.use(this.encuestasPath, require('../routes/encuestas'));
      
    }

    listen() {
        this.app.listen(this.port, (req, res) => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

}

//Exportar las funciones
module.exports = Server 


