const mongoose = require('mongoose');

//mongoose.connect("mongodb://127.0.0.1:27017/turismo").then(() => {
    mongoose.connect("mongodb+srv://caserita:lacaserita@cluster0.n5nfeds.mongodb.net/turismo").then(() => {   console.log("Conectado a la base de datos");
}).catch((error) => {
    console.error("Error de conexion a la base de datos:", error);
});

module.exports = mongoose;
