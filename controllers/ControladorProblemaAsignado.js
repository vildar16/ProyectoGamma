const ControladorProblemaAsignado = {};
const ProblemaAsignado = require('../models/problemaAsignado');
const ProblemaXCategoria = require('../models/problemasPorCategoria');
const { Op } = require("sequelize");
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

        if(!id_problema_asignado){
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



//@desc: permite actualizar una asignación a problema de un usuario
//@route: PUT api/asignaciones/actualizar/
ControladorProblemaAsignado.actualizarProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_problema_asignado, resuelto, id_problema_catalogo} =req.body;
    
    try {

        if(!id_problema_asignado || !resuelto || !id_problema_catalogo){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.update({
            resuelto: resuelto,
            id_problema_catalogo: id_problema_catalogo
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



//@desc: permite subir editar la solucion a un problema
//@route: PUT api/asignaciones/solucion/
ControladorProblemaAsignado.subirSolucion = async (req, res) => {
    console.log(req.body);
    const {id_problema_asignado, codigo_fuente, analisis} =req.body;
    
    try {

        if(!id_problema_asignado || !codigo_fuente || !analisis){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.update({
            resuelto: 1,
            codigo_fuente: codigo_fuente,
            analisis: analisis
        }, {
            where: {
                resuelto: {[Op.ne]: 2},
                id_problema_asignado: id_problema_asignado
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Solución actualizada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar solución a problema.'
        })
        
    }    
}



//@desc: permite actualizar el estado a revisado de un problema
//@route: PUT api/asignaciones/estadoasignacion/
ControladorProblemaAsignado.actualizarEstadoAsignacion = async (req, res) => {
    const {id_problema_asignado} =req.body;
    
    try {

        if(!id_problema_asignado){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.update({
            resuelto: 2
        }, {
            where: {
                id_problema_asignado: id_problema_asignado
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Estado 'revisado' de un problema actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el estado de solución.'
        })
        
    }    
}

//@desc: permite actualizar el estado a rechazado de un problema (0 = sin hacer)
//@route: PUT api/asignaciones/estadorechazado/
ControladorProblemaAsignado.actualizarEstadoAsignacionRechazado = async (req, res) => {
    const {id_problema_asignado} =req.body;
    
    try {

        if(!id_problema_asignado){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaAsignado.update({
            resuelto: 0
        }, {
            where: {
                id_problema_asignado: id_problema_asignado
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Estado 'sin hacer' de un problema actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar el estado del problema.'
        })
        
    }    
}

//@desc: Obtener todas las asignaciones a problemas
//@route: GET api/asignaciones/
ControladorProblemaAsignado.getAsignados = async (req, res) => {

    try{

        const asignaciones = await ProblemaAsignado.findAll({
            attributes: ['id_problema_asignado', 'id_usuario', 'id_problema_catalogo', 'resuelto', 'codigo_fuente', 'analisis']
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

//@desc: Obtener todas las asignaciones a problemas de un quest
//@route: GET api/asignaciones/xquest
ControladorProblemaAsignado.getAsignadosXquest = async (req, res) => {
    const {id_quest} =req.body;
    try{

        const asignaciones = await ProblemaAsignado.findAll({
            attributes: ['id_problema_asignado', 'id_usuario', 'id_problema_catalogo', 'resuelto', 'codigo_fuente', 'analisis'],
            where: { codigo_quest: id_quest }
        })
        res.json({message: asignaciones });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las asignaciones a problemas por quest.'
        })

    }
    
}

//@desc: Obtener todas las asignaciones a problemas de un quest
//@route: GET api/asignaciones/xquest_sinrevisar
ControladorProblemaAsignado.getAsignadosXquestSinRevisar = async (req, res) => {
    const {id_quest} =req.body;
    try{

        const asignaciones = await ProblemaAsignado.findAll({
            attributes: ['id_problema_asignado', 'id_usuario', 'id_problema_catalogo', 'resuelto', 'codigo_fuente', 'analisis'],
            where: { 
                codigo_quest: id_quest,
                resuelto: 1
            }
        })
        res.json({message: asignaciones });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las asignaciones a problemas por quest sin revisar.'
        })

    }
    
}

//@desc: Asignar problemas a los usuarios por quest
//@route: POST api/asignaciones/repartir/
ControladorProblemaAsignado.asignarProblemasQuest = async (req, res) => {
    console.log(req.body);
    const {codigo_sesion} =req.body;

    try{

        const [categorias] = await sequelize.query(`SELECT id_categoria FROM categorias_x_quest WHERE id_sesion = "${codigo_sesion}"`)
        const [usuarios] = await sequelize.query(`SELECT id_usuario FROM usuarios_x_quest WHERE id_sesion = "${codigo_sesion}"`)
        categorias.forEach(element => repartirProblemas(element, usuarios, codigo_sesion));
        res.status(200).json({
            ok: true,
            msg: `Repartición de problemas realizada correctamente.`,
        })

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al repartir los problemas por usuario.'
        })
    }
    
}

async function repartirProblemas(item, usuarios, codigo_sesion) {

    try{
        console.log(item.id_categoria)
        const problemas = await ProblemaXCategoria.findAll({
            where: {
                id_categoria: item.id_categoria
            },
            attributes: ['id_problema']
        })

        if (problemas.length >= usuarios.length) {
            let numUsuario = 0;

            for (let i = 0; i < problemas.length - (problemas.length % usuarios.length); i++) {

                if (numUsuario >= usuarios.length) {
                    numUsuario = 0;
                }

                const foundItem = await ProblemaAsignado.findOne({where: {
                    id_problema_catalogo: problemas[i].id_problema,
                    id_usuario: usuarios[numUsuario].id_usuario,
                    codigo_quest: codigo_sesion
                    }
                });

                if (!foundItem) {
                    const asignacion = await ProblemaAsignado.create({
                        resuelto: 0,
                        id_usuario: usuarios[numUsuario].id_usuario,
                        id_problema_catalogo: problemas[i].id_problema,
                        codigo_quest: codigo_sesion
                    })
                }
                //this.crearProblemaUsuario(usuarios[numUsuario], problemas[i]);
                numUsuario++;

            }
        }

    }catch(error){

        console.log(error)
    }
    
}


ControladorProblemaAsignado.compilar = async (req, res) => {
    try {
        console.log(req.body)

        const response = await import('node-fetch').then(({ default: fetch }) => fetch('https://api.jdoodle.com/execute', {
            method: 'POST', body: JSON.stringify({

                clientId: "26f666fdaefad5ba6b387617d1406c6b",
                clientSecret: "45de124ce070f6f56eb493668bfb3facb994767426f575ece98b0c843bd47350",
                language: req.body.lenguaje,
                script: req.body.script,
                versionIndex: "0"

            }),headers: {'Content-Type': 'application/json'}
        }));
        console.log(response)
        const data = await response.json();
        res.json({ message: data });

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al loguearse.'
        })

    }

}

module.exports = ControladorProblemaAsignado;