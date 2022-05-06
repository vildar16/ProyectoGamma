const ControladorSesion = {};
const sequelize = require('../db');
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
    const {codigo_sesion} =req.params;

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



ControladorSesion.getCategorias_x_quest = async (req, res) => {
    console.log(req.body);
    const {id_sesion} =req.params;

    try{
        
        const [sesion_x_categoria] = await sequelize.query(`SELECT c.id_categoria, c.nombre, c.color FROM categoria c JOIN categorias_x_quest cxs on c.id_categoria = cxs.id_categoria WHERE cxs.id_sesion = ${id_sesion}`)
        res.json({message: sesion_x_categoria });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar categoría.'
        })

    }
    
}


//@desc: obtiene sesiones de un usuario
//@route: GET api/sesiones/usuarios_x_quest/:codigo_quest
ControladorSesion.usuarios_x_quest = async (req, res) => {
    
    const {codigo_quest} =req.params;
    console.log(req.params);
    try{
        
        const [sesion_x_usuario] = await sequelize.query(`select * from usuario u left join usuarios_x_quest uxs 
                                                            on uxs.id_usuario = u.nombre_usuario where uxs.id_sesion = ${codigo_quest}`)
        res.json({message: sesion_x_usuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener sesiones del usuario.'
        })

    }
    
}



//@desc: obtiene los problemas y categorias de un usuario con respecto a su sesion
//@route: GET api/sesiones/problemas_usuario_sesion
ControladorSesion.problemasUsuarioSesion = async (req, res) => {

    const {nombre_usuario, codigo_sesion} =req.body;
    console.log(req.body);
    try{
        
        if(!nombre_usuario || !codigo_sesion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const [problemas_usuario] = await sequelize.query(`SELECT p.id_problema, p.nombre, c.id_categoria, c.nombre, pa.resuelto, pa.codigo_fuente, pa.analisis 
                                                            FROM problema_catalogo p 
                                                            INNER JOIN problema_asignado pa ON p.id_problema = pa.id_problema_catalogo
                                                            INNER JOIN problema_x_categoria pxc ON p.id_problema = pxc.id_problema
                                                            INNER JOIN categoria c ON pxc.id_categoria = c.id_categoria
                                                            INNER JOIN usuario u ON pa.id_usuario = u.nombre_usuario
                                                            INNER JOIN usuarios_x_quest uxq ON u.nombre_usuario = uxq.id_usuario
                                                            WHERE u.nombre_usuario = '${nombre_usuario}' AND uxq.id_sesion = ${codigo_sesion}
                                                            ORDER BY c.id_categoria`)
        res.json({message: problemas_usuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener sesiones del usuario.'
        })

    }
    
}



//@desc: agrega usuarios a una sesion por medio de un csv
//@route: GET api/sesiones/csv-usuarios
ControladorSesion.setUsuariosCSV = async (req, res) => {
    
    const {codigo_sesion, path} =req.params;
    console.log(req.params);
    try{
        
        const fs = require("fs");
        const data = fs.readFile(path, "utf-8");
        //const [sesion_x_usuario] = await sequelize.query(`select u.nombre_usuario from usuario u left join usuarios_x_quest uxs 
        //                                                    on uxs.id_usuario = u.nombre_usuario where uxs.id_sesion = ${codigo_sesion}`)

        res.status(200).json({
            ok: true,
            msg: `Correcto.`,
        })

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener sesiones del usuario.'
        })

    }
    
}

module.exports = ControladorSesion;