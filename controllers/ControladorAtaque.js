const ControladorAtaque = {};
const Ataque = require('../models/accion');
var Holidays = require('date-holidays')
var hd = new Holidays('CR')
//require('dotenv').config();

//@desc: permite crear un ataque
//@route: POST api/ataques/crear/
ControladorAtaque.crearAtaque = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const today = new Date()
        console.log(today)
        const date = today
        var dias = 4
        const diaslim = dias
        for (d = 0; d < diaslim; d++) {
            date.setDate(date.getDate() + 1)
            if (hd.isHoliday(date)) {
                dias = 8
            }
        }
        today.setDate(today.getDate() + dias - diaslim)
        tiempo_lim = today.toJSON().slice(0, 10)

        const ataque = await Ataque.create({
            id_problema: id_problema,
            id_usuario_emisor: id_usuario_emisor,
            id_usuario_receptor: id_usuario_receptor,
            id_metodo_resolucion: id_metodo_resolucion,
            timestamp: new Date().toJSON().slice(0, 10),
            tiempo: tiempo_lim

        })
        
        res.status(200).json({
            ok: true,
            msg: `${ataque.id_usuario_emisor} ataco correctamente.`,
            data: {
                id_problema: ataque.id_problema,
                id_usuario_emisor: ataque.id_usuario_emisor,
                id_usuario_receptor: ataque.id_usuario_receptor,
                id_metodo_resolucion: ataque.id_metodo_resolucion,
                timestamp: ataque.timestamp,
                tiempo: ataque.tiempo
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al atacar.'
        })
        
    }    
}

//@desc: permite responder a un ataque
//@route: PUT api/ataques/responder/
ControladorAtaque.responderAtaque = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion/*, timestamp*/} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion/* || !timestamp*/){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        //const [year, month, day] = [...timestamp.split("-")]
        const today = new Date(/*year, month - 1, day*/)
        const date = today
        var dias = 4
        const diaslim = dias
        for (d = 0; d < diaslim; d++) {
            date.setDate(date.getDate() + 1)
            if (hd.isHoliday(date)) {
                dias = 8
            }
        }
        today.setDate(today.getDate() + dias - diaslim)
        tiempo_lim = today.toJSON().slice(0, 10)

        await Ataque.update({
            tiempo: tiempo_lim,
            efectuo: 1
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
            msg: `Ataque respondido correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al responder ataque.'
        })
        
    }    
}

//@desc: actualiza el estado del ataque a revisado
//@route: PUT api/ataques/revisado/
ControladorAtaque.ataqueRevisado = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Ataque.update({
            efectuo: 2
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
            msg: `Ataque revisado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al revisar ataque.'
        })
        
    }    
}

module.exports = ControladorAtaque;