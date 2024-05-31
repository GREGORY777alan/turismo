const mongoose = require('../conexion');

const schemaData = mongoose.Schema({

    nombre_lugar: String,
    descripcion_lugar: String,
    foto_lugar: String,
   

});

const userModel = mongoose.model("lugar", schemaData, "lugar");
module.exports = userModel;
