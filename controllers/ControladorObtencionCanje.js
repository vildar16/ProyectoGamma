const ControladorObtencionCanje = {};

const Canje = require('../models/puntajeUsuarios');
const Globo = require('../models/categoriasPorQuest');
const Categoria = require('../models/categoria')

//@desc: permite crear un canje
//@route: POST api/canje/crear/
ControladorObtencionCanje.crearCanje= async (req, res) => {
    console.log(req.body);
    const {id_quest, id_categoria, id_usuario} =req.body;
    
    try {

        if(!id_quest || !id_categoria || !id_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const canje = await Canje.create({
            id_quest: id_quest,
            id_categoria: id_categoria,
            id_usuario: id_usuario,
            monedas: 0,
            globos: 0
        })
        
        res.status(200).json({
            ok: true,
            msg: `Canje creado correctamente.`,
            data: {
                id_sesion: canje.id_sesion,
                id_categoria: canje.id_categoria,
                id_usuario: canje.id_usuario,
                monedas: canje.monedas,
                globos: canje.globos
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear canje.'
        })
        
    }    
}

//@desc: permite ganar monedas en achivers
//@route: PUT api/canje/achivers/
ControladorObtencionCanje.actualizarAchivers = async (req, res) => {
    console.log(req.body);
    const {id_sesion, id_categoria, id_usuario} =req.body;
    
    try {

        if(!id_sesion || !id_categoria || !id_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const monedas = await Canje.findAll({
            attributes: ['monedas'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario_emisor
            

            }
        })
        
        await Canje.update({
            modedas: monedas[0].dataValues.monedas + 1,
        }, {
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Archiver actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar monedas.'
        })
        
    }    
}


//@desc: permite ganar monedas en helpers
//@route: PUT api/canje/helpers/
ControladorObtencionCanje.actualizarHelpers = async (req, res) => {
    console.log(req.body);
    const {id_sesion, id_categoria, id_usuario_emisor, id_usuario_receptor} =req.body;
    
    try {

        if(!id_sesion || !id_categoria || !id_usuario_emisor || !id_usuario_receptor){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const monedasEmisor = await Canje.findAll({
            attributes: ['monedas'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario_emisor
            

            }
        })

        const monedasReceptor = await Canje.findAll({
            attributes: ['monedas'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario_receptor
            

            }
        })
        
        await Canje.update({
            monedas: monedasEmisor[0].dataValues.monedas + 0.5,
        }, {
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario_emisor
            }
        })

        await Canje.update({
            monedas: monedasReceptor[0].dataValues.monedas + 0.5,
        }, {
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario_receptor
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Helper actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar monedas.'
        })
        
    }    
}

//@desc: permite ganar monedas en killers
//@route: PUT api/canje/killers/
ControladorObtencionCanje.actualizarKillers = async (req, res) => {
    console.log(req.body);
    const {id_sesion, id_categoria, id_usuario} =req.body;
    
    try {

        if(!id_sesion || !id_categoria || !id_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const monedas = await Canje.findAll({
            attributes: ['monedas'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            

            }
        })
        
        await Canje.update({
            modedas: monedas[0].dataValues.monedas + 2,
        }, {
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Killers actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar monedas.'
        })
        
    }    
}

//@desc: permite ganar monedas en buscador
//@route: PUT api/canje/buscador/
ControladorObtencionCanje.actualizarBuscador= async (req, res) => {
    console.log(req.body);
    const {id_sesion, id_categoria, id_usuario} =req.body;
    
    try {

        if(!id_sesion || !id_categoria || !id_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }


        const monedas = await Canje.findAll({
            attributes: ['monedas'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            

            }
        })
        
        await Canje.update({
            modedas: monedas[0].dataValues.monedas + 1.25,
        }, {
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Buscador-Problemas actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar monedas.'
        })
        
    }    
}

//@desc: permite canjer monedas por globos
//@route: PUT api/canje/globos/
ControladorObtencionCanje.canjearGlobo = async (req, res) => {
    console.log(req.body);
    const {id_sesion, id_categoria, id_usuario} =req.body;
    
    try {

        if(!id_sesion || !id_categoria || !id_usuario){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const globo = await Globo.findAll({
            attributes: ['costo_globo'],
            where: {
                id_sesion:id_sesion,
                id_categoria:id_categoria

            }
        })

        const monedas = await Canje.findAll({
            attributes: ['monedas', 'globos'],
            where: {
                id_quest: id_sesion,
                id_categoria: id_categoria,
                id_usuario:id_usuario
            

            }
        })

        if(monedas[0].dataValues.monedas >= globo[0].dataValues.costo_globo){

            await Canje.update({
                monedas: monedas[0].dataValues.monedas - globo[0].dataValues.costo_globo,
                globos:  monedas[0].dataValues.globos + 1
            }, {
                where: {
                    id_quest: id_sesion,
                    id_categoria: id_categoria,
                    id_usuario:id_usuario
                }
            })
            
            res.status(200).json({
                ok: true,
                msg: `Cantidad Globos actualizada.`,
            })

        }else {
            res.status(400).json({
                ok: false,
                msg: 'No hay dinero'
            })

        }

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar monedas.'
        })
        
    }    
}

//@desc: permite canjer monedas por globos
//@route: PUT api/canje/globos/
ControladorObtencionCanje.todosJugadores = async (req, res) => {
    const {id_quest, id_usuario} =req.body;
    
    try{

        const canjes = await Canje.findAll({
            attributes: ['id_quest', 'id_categoria', 'id_usuario', 'globos', 'monedas'],
            where: {
                id_quest:id_quest,
                id_usuario:id_usuario
            }
        })

        const categoria = await Categoria.findAll({
            attributes: ["nombre"],
            where: {
                id_categoria: canjes[0].dataValues.id_categoria
            }

        })

        console.log(categoria[0].dataValues.nombre)


        res.json({categoria: categoria[0].dataValues.nombre, monedas:canjes[0].dataValues.monedas, globos:canjes[0].dataValues.globos });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los canjes.'
        })

    }    
}

module.exports = ControladorObtencionCanje;