const express = require('express');
const cors = require('cors');
const mongoose = require('./conexion');
const guiaRutas = require('./ruta/guiaRuta');
const usuarioRutas = require('./ruta/usuariologinRuta');
const usuariocrudRutas = require('./ruta/usuarioRuta');
const lugarRutas = require('./ruta/lugarRuta');
const servicioRutas = require('./ruta/servicioRuta');
const reservaRutas = require('./ruta/reservaRuta');
const app = express();


app.use(cors())

app.use(express.json());


  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Servidor en ejecuciÃ³n en el puerto", PORT);
});


app.use('/guia', guiaRutas);
app.use('/usuario', usuarioRutas);
app.use('/usuarioc', usuariocrudRutas);
app.use('/lugar', lugarRutas);
app.use('/servicio', servicioRutas);
app.use('/reserva', reservaRutas);
