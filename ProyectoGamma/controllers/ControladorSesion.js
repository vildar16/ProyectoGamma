const ControladorSesion = {};
const Sesion = require('../models/sesion');
//require('dotenv').config();

//@desc: permite crear una sesión
//@route: POST api/sesiones/crear/
ControladorSesion.crearSesion = async (req, res) => {
    console.log(req.body);
    const {codigo_sesion, nombre_sesion} =req.body;
    
    try {

        if(!codigo_sesion || !nombre_sesion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const sesion = await Sesion.create({
            codigo_sesion: codigo_sesion,
            nombre_sesion: nombre_sesion
        })
        
        res.status(200).json({
            ok: true,
            msg: `Sesión ${sesion.nombre_sesion} creada correctamente.`,
            data: {
                codigo_sesion: sesion.codigo_sesion,
                nombre_sesion: sesion.nombre_sesion
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear sesion.'
        })
        
    }    
}


//@desc: permite borrar una sesión
//@route: DELETE api/sesiones/borrar/
ControladorSesion.borrarSesion = async (req, res) => {
    console.log(req.body);
    const {codigo_sesion} =req.body;
    
    try {

        if(!codigo_sesion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Sesion.destroy({
            where: {
                codigo_sesion: codigo_sesion
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Sesión borrada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar sesión.'
        })
        
    }    
}



//@desc: permite actualizar una sesión
//@route: PUT api/sesiones/actualizar/
ControladorSesion.actualizarSesion = async (req, res) => {
    console.log(req.body);
    const {codigo_sesion, nombre_sesion} =req.body;
    
    try {

        if(!codigo_sesion || !nombre_sesion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Sesion.update({
            codigo_sesion: codigo_sesion,
            nombre_sesion: nombre_sesion
        }, {
            where: {
                codigo_sesion: codigo_sesion
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Sesión actualizada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar sesión.'
        })
        
    }    
}



//@desc: Obtener todas las sesiones
//@route: GET api/sesiones/
ControladorSesion.getSesiones = async (req, res) => {

    try{

        const sesiones = await Sesion.findAll({
            attributes: ['codigo_sesion', 'nombre_sesion']
        })
        res.json({message: sesiones});

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las sesiones.'
        })

    }
    
}



//@desc: Obtener una sesión
//@route: GET api/sesiones/:id
ControladorSesion.getSesion = async (req, res) => {
    console.log(req.body);
    const {codigo_sesion} =req.body;

    try{

        const sesion = await Sesion.findAll({
            where: {
                codigo_sesion: codigo_sesion
            }
        })
        res.json({message: sesion });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la sesion.'
        })

    }
    
}



module.exports = ControladorSesion;