const Comentario = require('../models/Comentario');

exports.crear = async(req, res) =>{
    try{
        let comentario;

        //Guardamos el comentario
        comentario = new Comentario(req.body);

        await comentario.save(); //Esta linea nos permite guardar un comentario en la base de datos
        res.send(comentario);

    }catch(error){
        console.log(error);
        res.status(500).send('Error al guardar comentario');
    }
}

exports.obtener = async(req, res) => { //Con este metodo obtenemos los comentarios del front-end
    try{

        const comentarios = await Comentario.find();
        res.json(comentarios);

    }catch(error){
        console.log(error);
        res.status(500).send('Error al obtener los comentarios');
    }
}

exports.eliminar = async(req, res) =>{
    try{

        let comentario = await Comentario.findById(req.params.id);

        if(!comentario ){
            res.status(404).json( { msg: 'No existe el comentario'});
        }

        await Comentario.findOneAndRemove( { _id: req.params.id}); //Es guin bajo Id(_id) por que mongoDb guarda los id de esta manera
        res.json( { mensaje: 'Comentario Eliminado Correctamente'})
    }catch (error){
        console.log(error);
        res.status(500).send('Error al eliminar el comentarios');
    }
}

