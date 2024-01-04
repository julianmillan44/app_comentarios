const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); //Creamos el servidor

conectarBD(); //Estamos estableciendo la conexion con la base de datos

app.use( express.static('public')); //Directorios publicos

app.use(express.json());
app.use(cors());
app.use('/api/comentarios', require('./routes/comentario'));

app.listen(process.env.PORT, ()=>{
    console.log('El servidor esta funcionando en el puerto' + process.env.PORT);
})

