'use strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//cargar rutas
var fruta_routes= require('./routes/frutas');

//cargar body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cors


//rutas base
app.use('/api',fruta_routes);

module.exports= app;