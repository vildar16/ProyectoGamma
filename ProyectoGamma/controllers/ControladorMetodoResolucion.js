const ControladorMetodoResolucion = {};
const Metodo = require('../models/metodoDeResolucion');
//require('dotenv').config();

//@desc: permite crear un métod de resolución
//@route: POST api/metodos/crear/
ControladorMetodoResolucion.crearMetodo = async (req, res) => {
    console.log(req.body);
    const {nombre_metodo_resolucion} =req.body;
    
    try {

        if(!nombre_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const metodo = await Metodo.create({
            nombre_metodo_resolucion: nombre_metodo_resolucion
        })
        
        res.status(200).json({
            ok: true,
            msg: `Método de resolución ${metodo.nombre} creado correctamente.`,
            data: {
                nombre_metodo_resolucion: nombre_metodo_resolucion
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear método de resolución.'
        })
        
    }    
}


//@desc: permite borrar un método de resolución
//@route: DELETE api/metodos/borrar/
ControladorMetodoResolucion.borrarMetodos = async (req, res) => {
    console.log(req.body);
    const {id_metodo_resolucion} =req.body;
    
    try {

        if(!id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Metodo.destroy({
            where: {
                id_metodo_resolucion: id_metodo_resolucion
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Método de resolución borrado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar método de resolución.'
        })
        
    }    
}



//@desc: permite actualizar un método de resolución
//@route: PUT api/metodos/actualizar/
ControladorMetodoResolucion.actualizarMetodo = async (req, res) => {
    console.log(req.body);
    const {id_metodo_resolucion, nombre_metodo_resolucion} =req.body;
    
    try {

        if(!id_metodo_resolucion || !nombre_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Metodo.update({
            nombre_metodo_resolucion: nombre_metodo_resolucion
        }, {
            where: {
                id_metodo_resolucion: id_metodo_resolucion
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Método de resolución actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar método de resolución.'
        })
        
    }    
}



//@desc: Obtener todos los métodos
//@route: GET api/metodos/
ControladorMetodoResolucion.getMetodos = async (req, res) => {

    try{

        const metodos = await Metodo.findAll({
            attributes: ['id_metodo_resolucion', 'nombre_metodo_resolucion']
        })
        res.json({message: metodos });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los métodos de resolución.'
        })

    }
    
}



//@desc: Obtener un método de resolución
//@route: GET api/metodos/:id
ControladorMetodoResolucion.getMetodo = async (req, res) => {
    console.log(req.body);
    const {id_metodo_resolucion} =req.body;

    try{

        const metodo = await Metodo.findAll({
            where: {
                id_metodo_resolucion: id_metodo_resolucion
            }
        })
        res.json({message: metodo });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el método de resolución.'
        })

    }
    
}



module.exports = ControladorMetodoResolucion;