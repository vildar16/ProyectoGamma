const ControladorAtaque = {};
const Ayuda = require('../models/accion');
//require('dotenv').config();

//@desc: permite crear un ataque
//@route: POST api/ayuda/crear/
ControladorAyuda.crearAyuda = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const ayuda = await Ayuda.create({
            id_problema: id_problema,
            id_usuario_emisor: id_usuario_emisor,
            id_usuario_receptor: id_usuario_emisor,
            id_metodo_resolucion: id_metodo_resolucion,
            timestamp: new Date(),
            tiempo: null,
            efectuo: null


        })
        
        res.status(200).json({
            ok: true,
            msg: `${ayuda.id_usuario_emisor} pidio ayuda correctamente.`,
            data: {
                id_problema: id_problema,
                id_usuario_emisor: id_usuario_emisor,
                id_usuario_receptor: id_usuario_emisor,
                id_metodo_resolucion: id_metodo_resolucion,
                timestamp: new Date(),
                tiempo: null,
                efectuo: null
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al pedir ayuda.'
        })
        
    }    
}

//@desc: permite asignar una ayuda
//@route: PUT api/ayuda/asingar/
ControladorAyuda.asignarAyuda = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Ayuda.update({
            id_usuario_receptor: id_usuario_receptor
        }, {
            where: {
                id_problema: id_problema,
                id_usuario_emisor: id_usuario_emisor,
                id_usuario_receptor: id_usuario_emisor,
                id_metodo_resolucion: id_metodo_resolucion,
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Ayuda asignada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar ayuda'
        })
        
    }    
}

//@desc: permite responder a una ayuda
//@route: PUT api/ayuda/responder/
ControladorAyuda.responderAyuda = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion, efectuo} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion || !efectuo){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Ayuda.update({
            tiempo: new Date(),
            efectuo: efectuo
        }, {
            where: {
                id_problema: id_problema,
                id_usuario_emisor: id_usuario_emisor,
                id_usuario_receptor: id_usuario_receptor,
                id_metodo_resolucion: id_metodo_resolucion,
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Ayuda respondida correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al responder ayuda.'
        })
        
    }    
}

module.exports = ControladorAyuda;