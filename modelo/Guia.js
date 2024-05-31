const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    ci: Number,
    nombre: String,
    apellidos: String,
    direccion: String,
    celular: Number,
});

const userModel = mongoose.model("guia", schemaData, "guia");
module.exports = userModel;
