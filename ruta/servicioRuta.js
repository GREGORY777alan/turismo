const express = require('express');
const userModel = require('../modelo/Servicio');
const router = express.Router();
const fs = require('fs');
// Listar
router.get("/", async (req, res) => {
    const data = await userModel.find({}).populate('idguia', 'ci nombre apellidos celular direccion').populate('idlugar', 'nombre_lugar descripcion_lugar foto_lugar');;
    res.json({ success: true, data: data });
    console.log(data);
});

// Crear
router.post("/create", async (req, res) => {
    console.log(req.body);
    req.body.nombre_servicio = req.body.nombre_servicio.toUpperCase();
    req.body.descripcion_servicio = req.body.descripcion_servicio.toUpperCase();
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });
});

// Actualizar
router.put("/update", async (req, res) => {   
    console.log(req.body);
    if (req.body.nombre_servicio) {req.body.nombre_servicio= req.body.nombre_servicio.toUpperCase();}
    if (req.body.descripcion_servicio) {req.body.descripcion_servicio= req.body.descripcion_servicio.toUpperCase();}
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
