const ControladorTipoUsuario = {};
const sequelize = require('../db');
const TipoUsuario = require('../models/tipoDeUsuario');
//require('dotenv').config();

//@desc: permite crear un tipo de usuario
//@route: POST api/tiposusuario/crear/
ControladorTipoUsuario.crearTipoUsuario = async (req, res) => {
    console.log(req.body);
    const {nombre_tipo_de_usuario} =req.body;
    
    try {

        if(!nombre_tipo_de_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const tipoUsuario = await TipoUsuario.create({
            nombre_tipo_de_usuario: nombre_tipo_de_usuario
        })
        
        res.status(200).json({
            ok: true,
            msg: `Tipo de usuario ${tipoUsuario.nombre_tipo_de_usuario} creado correctamente.`,
            data: {
                nombre_tipo_de_usuario: tipoUsuario.nombre_tipo_de_usuario
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear tipo de usuario.'
        })
        
    }    
}


//@desc: permite borrar un tipo de usuario
//@route: DELETE api/tiposusuario/borrar/
ControladorTipoUsuario.borrarTipoUsuario = async (req, res) => {
    console.log(req.body);
    const {id_tipo_de_usuario} =req.body;
    
    try {

        if(!id_tipo_de_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await TipoUsuario.destroy({
            where: {
                id_tipo_de_usuario: id_tipo_de_usuario
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Tipo de usuario borrado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar tipo de usuario.'
        })
        
    }    
}



//@desc: permite actualizar un tipo de usuario
//@route: PUT api/tiposusuario/actualizar/
ControladorTipoUsuario.actualizarTipoUsuario = async (req, res) => {
    console.log(req.body);
    const {id_tipo_de_usuario, nombre_tipo_de_usuario} =req.body;
    
    try {

        if(!id_tipo_de_usuario || !nombre_tipo_de_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await TipoUsuario.update({
            nombre_tipo_de_usuario: nombre_tipo_de_usuario
        }, {
            where: {
                id_tipo_de_usuario: id_tipo_de_usuario
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Tipo de usuario actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el tipo de usuario.'
        })
        
    }    
}



//@desc: Obtener todos los tipos de usuario
//@route: GET api/tiposusuario/
ControladorTipoUsuario.getTiposUsuario = async (req, res) => {

    try{

        const tiposUsuario = await TipoUsuario.findAll({
            attributes: ['id_tipo_de_usuario', 'nombre_tipo_de_usuario']
        })
        res.json({message: tiposUsuario});

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los tipos de usuario.'
        })

    }
    
}



//@desc: Obtener un tipo de usuario
//@route: GET api/tiposusuario/:id
ControladorTipoUsuario.getTipoUsuario = async (req, res) => {
    const {id_tipo_de_usuario} =req.params;

    try{

        const tipoUsuario = await TipoUsuario.findAll({
            where: {
                id_tipo_de_usuario: id_tipo_de_usuario
            }
        })
        res.json({message: tipoUsuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el tipo de usuario.'
        })

    }
    
}



module.exports = ControladorTipoUsuario;