'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FrutasSchema= Schema({
    nombre:String,
    color: String,
    temporada: Boolean
});

module.exports= mongoose.model('Fruta',FrutasSchema);