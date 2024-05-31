const express = require('express');
const userModel = require('../modelo/Reserva');
const router = express.Router();
const fs = require('fs');
// Listar
router.get("/", async (req, res) => {
    const data = await userModel.find({}).
    populate('idusuario', 'nombre apellidos celular direccion').
   // populate('idservicio', 'nombre_servicio descripcion_servicio precio estado_servicio dia hora_ini hora_fin');
   populate({
    path: 'idservicio',
    select: 'nombre_servicio descripcion_servicio precio estado_servicio dia hora_ini hora_fin',
    populate: [
        {path: 'idlugar',select: 'nombre_lugar descripcion_lugar'},
        {path: 'idguia',select: 'nombre apellidos'},
    ]
});
    res.json({ success: true, data: data });
    console.log(data);
});

// Crear
router.post("/create", async (req, res) => {
    console.log(req.body);
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {   
    console.log(req.body);
    const { _id, ...rest } = req.body;
    console.log(rest);
    const data = await userModel.updateOne({ _id: _id }, rest);
    res.send({ success: true, message: "actualizado", data: data });
});

// Eliminar
router.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const data = await userModel.deleteOne({ _id: id });
    res.send({ success: true, message: "eliminado", data: data });
});


module.exports = router;
