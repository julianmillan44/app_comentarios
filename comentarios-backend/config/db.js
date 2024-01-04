const mongoose = require('mongoose');
require('dotenv').config( { path:'var.env'});

const connectDB = async () =>{

    try{  //Este try,catch sirve para capturar los errores que pueda tener la base de datos

        await mongoose.connect(process.env.MONGO_DB)    //Este await simular funciones sincronas, que nos sirve para esperar la respuesta de una funcion determinada 

        console.log("Base de datos conectada");

    }catch(error){
        
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB