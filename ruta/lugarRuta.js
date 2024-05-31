const express = require('express');
const userModel = require('../modelo/Lugar');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './turismo/lugar'); 
    },
    filename: (req, file, cb) => {
      const fileName = `${file.originalname}`;
      cb(null, fileName);
    },
  });
  
  
  const upload = multer({ storage });

  router.use('/verfotolugar', express.static(path.join(__dirname, '../turismo/lugar')));

router.post("/create",upload.single('file'), async (req, res) => {
    console.log(req.body);
    req.body.nombre_lugar = req.body.nombre_lugar.toUpperCase();
    req.body.descripcion_lugar = req.body.descripcion_lugar.toUpperCase();
    const data = new userModel(req.body);
    await data.save();
    res.send({ success: true, message: "dato registrado" });

});


router.get("/", async (req, res) => {
    const data = await userModel.find({});
    res.json({ success: true, data: data });
    console.log(data);
});



// Actualizar
router.put("/update",upload.single('file'),async (req, res) => {   
    console.log(req.body);
    if (req.body.nombre_lugar) {req.body.nombre_lugar= req.body.nombre_lugar.toUpperCase();}
    if (req.body.descripcion_lugar) {req.body.descripcion_lugar= req.body.descripcion_lugar.toUpperCase();}
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
