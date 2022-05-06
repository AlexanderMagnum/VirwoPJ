//Logica de negocio
const mongoose = require('mongoose');       
const authSchema = require('./auth.model'); //Definido en model

authSchema.statics = {
    //metodo que crea, contiene data y callback
    create: function (data, cb) {
        const user = new this(data);
        user.save(cb);
    },
    //metodo log in con funcion anonimta, args query y callback
    login: function (query,cb){
        this.find(query, cb);
    }
}

const authModel = mongoose.model('Users', authSchema); // Tabla SQL *** Colleccion NOSQL
module.exports = authModel;