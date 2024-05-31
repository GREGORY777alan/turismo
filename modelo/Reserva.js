const mongoose = require('../conexion');

const schemaData = mongoose.Schema({
    fecha_reserva: Date,
    estado_reserva: String,
    cantidad: Number,
    costo_total: Number,
    idusuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario' },
    idservicio: { type: mongoose.Schema.Types.ObjectId, ref: 'servicio' }
});

const userModel = mongoose.model("reserva", schemaData, "reserva");
module.exports = userModel;