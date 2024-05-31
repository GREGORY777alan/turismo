const mongoose = require('../conexion');

const schemaData = mongoose.Schema({

    nombre_servicio: String,
    descripcion_servicio: String,
    precio: Number,
    estado_servicio:String,
    dia:String,
    hora_ini:String,
    hora_fin:String,
    idguia: { type: mongoose.Schema.Types.ObjectId, ref: 'guia' },
    idlugar: { type: mongoose.Schema.Types.ObjectId, ref: 'lugar' }

});

const userModel = mongoose.model("servicio", schemaData, "servicio");
module.exports = userModel;