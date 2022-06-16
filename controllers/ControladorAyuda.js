const ControladorAyuda = {};
const Ayuda = require('../models/accion');
var Holidays = require('date-holidays')
var hd = new Holidays('CR')
//require('dotenv').config();

//@desc: permite crear una ayuda
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
        
        const today = new Date()
        const date = today
        var dias = 4
        const diaslim = dias
        for (d = 0; d < diaslim; d++) {
            date.setDate(date.getDate() + 1)
            if (hd.isHoliday(date)) {
                dias = 8
            }
        }
        today.setDate(today.getDate() + dias)
        tiempo_lim = today.toJSON().slice(0, 10)

        const ayuda = await Ayuda.create({
            id_problema: id_problema,
            id_usuario_emisor: id_usuario_emisor,
            id_usuario_receptor: id_usuario_emisor,
            id_metodo_resolucion: id_metodo_resolucion,
            timestamp: new Date().toJSON().slice(0, 10),
            tiempo: tiempo_lim


        })
        
        res.status(200).json({
            ok: true,
            msg: `${ayuda.id_usuario_emisor} pidio ayuda correctamente.`,
            data: {
                id_problema: ayuda.id_problema,
                id_usuario_emisor: ayuda.id_usuario_emisor,
                id_usuario_receptor: ayuda.id_usuario_emisor,
                id_metodo_resolucion: ayuda.id_metodo_resolucion,
                timestamp: ayuda.timestamp,
                tiempo: ayuda.tiempo
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

//@desc: actualiza el estado de la ayuda a revisado
//@route: PUT api/ayuda/revisado/
ControladorAyuda.revisarAyuda = async (req, res) => {
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
            msg: `Ayuda revisada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al revisar ayuda.'
        })
        
    }    
}

module.exports = ControladorAyuda;