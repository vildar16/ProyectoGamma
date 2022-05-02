const ControladorProblemaAsignado = {};
const ProblemaInstancia = require('../models/problemaAsignado');
//require('dotenv').config();

//@desc: permite crear una asignación a un problema
//@route: POST api/asignaciones/crear/
ControladorProblemaAsignado.crearProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_usuario, id_problema_catalogo} =req.body;
    
    try {

        if(!id_usuario || !id_problema_catalogo){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const asignacion = await ProblemaAsignado.create({
            resuelto: 0,
            id_usuario: id_usuario,
            id_problema_catalogo: id_problema_catalogo
        })
        
        res.status(200).json({
            ok: true,
            msg: `Asignación a problema creada correctamente.`,
            data: {
                resuelto: asignacion.resuelto,
                id_usuario: asignacion.id_usuario,
                id_problema_catalogo: asignacion.id_problema_catalogo
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear asignación a problema.'
        })
        
    }    
}


//@desc: permite borrar una asignación a problema
//@route: DELETE api/asignaciones/borrar/
ControladorProblemaAsignado.borrarProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_problema_asignado} =req.body;
    
    try {

        if(!id_problemaAsignado){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.destroy({
            where: {
                id_problema_asignado: id_problema_asignado
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Asignación a problema borrada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar asignación a problema.'
        })
        
    }    
}



//@desc: permite actualizar una asignación a problema
//@route: PUT api/asignaciones/actualizar/
ControladorProblemaAsignado.actualizarProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_problema_asignado, resuelto} =req.body;
    
    try {

        if(!id_problema_asignado || !resuelto){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.update({
            resuelto: resuelto
        }, {
            where: {
                id_problema_asignado: id_problema_asignado
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Asignación a problema actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar asignación a problema.'
        })
        
    }    
}



//@desc: Obtener todas las asignaciones a problemas
//@route: GET api/asignaciones/
ControladorProblemaAsignado.getAsignados = async (req, res) => {

    try{

        const asignaciones = await ProblemaAsignado.findAll({
            attributes: ['id_problema_asignado', 'id_usuario', 'id_problema_catalogo', 'id_metodo_resolucion', 'resuelto']
        })
        res.json({message: asignaciones });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las asignaciones a problemas.'
        })

    }
    
}



//@desc: Obtener una asignación de un problema
//@route: GET api/asignaciones/:id
ControladorProblemaAsignado.getAsignado = async (req, res) => {
    console.log(req.body);
    const {id_problema_asignado} =req.body;

    try{

        const asignacion = await ProblemaAsignado.findAll({
            where: {
                id_problema_asignado: id_problema_asignado
            }
        })
        res.json({message: asignacion });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la asignación al problema.'
        })

    }
    
}



module.exports = ControladorProblemaAsignado;