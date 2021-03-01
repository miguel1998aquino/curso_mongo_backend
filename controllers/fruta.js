'use strict'
var Fruta = require('../models/fruta')


function pruebas(req, res) {
    res.status(200).send({
        message: 'Esta ruta es de prueba en mi api con mongo y node'
    });
};

function saveFruta(req, res) {
    var fruta = new Fruta();
    var params = req.body;

    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;
        fruta.save((err, frutaStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error en el servidor'
                });
            } else {
                if (frutaStored) {
                    res.status(200).send({
                        fruta: frutaStored
                    });
                } else {
                    res.status(200).send({
                        message: 'la fruta no se ha guardado'
                    });
                }
            }
        })
    } else {
        res.status(404).send({
            message: 'los campos son obligatorios'
        });
    }
};

function getFrutas(req, res) {
    Fruta.find({}).sort({ '_id': -1 }).exec((err, frutas) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if (frutas) {
                res.status(200).send({
                    frutas
                });
            } else {
                res.status(200).send({
                    message: 'no hay frutas'
                })
            }
        }
    })
}

function getFruta(req, res) {
    var frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err, fruta) => {
        if (err) {
            res.status(500).send({
                message: 'error en la base de datos'
            })
        } else {
            if (fruta) {
                res.status(200).send({
                    fruta
                })
            } else {
                res.status(200).send({
                    message: 'la fruta no existe'
                })
            }
        }
    })
};

function updateFruta(req, res) {
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, { new: true }, (err, frutaupdated) => {
        if (err) {
            res.status(500).send({
                message: 'error en el servidor'
            });
        } else {
            if (frutaupdated) {
                res.status(200).send({
                    fruta: frutaupdated
                });
            } else {
                res.status(200).send({
                    message: 'la fruta no existe'
                });
            }
        }
    })

}

function deleteFruta(req, res) {
    var frutaId = req.params.id;

    Fruta.findByIdAndRemove(frutaId, (err, frutaRemove) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        }else{
            if(frutaRemove){
                res.status(200).send({
                    fruta: frutaRemove
                });
            }else{
                res.status(200).send({
                    message:'La fruta no existe'
                });
            }
        }
    })
}


module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
}
