'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port= 3900;  

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mongo', { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => {
        console.log('la conexion a la base de datos es correcta!!');

        app.listen(port,()=>{
            console.log('El servidor esta escuchando en http://localhost:'+port);
        });
    })
    .catch(err => {
        console.log(err);
    });