const ControladorSesion = {};
const Sesion = require('../models/sesion');
//require('dotenv').config();

//@desc: permite crear una sesión
//@route: POST api/sesiones/crear/
ControladorSesion.crearSesion = async (req, res) => {
    console.log(req.body);
    const {codigo, nombre} =req.body;
    
    try {

        if(!codigo || !nombre){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const sesion = await Sesion.create({
            codigo: codigo,
            sesion: sesion
        })
        
        res.status(200).json({
            ok: true,
            msg: `Sesión ${sesion.nombre} creada correctamente.`,
            data: {
                codigo: sesion.codigo,
                nombre: sesion.nombre
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
        
        await Categoria.update({
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
            attributes: ['codigo', 'nombre']
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

module.exports = ControladorSesiones;