const ControladorAtaque = {};
const Ataque = require('../models/accion');
//require('dotenv').config();

//@desc: permite crear un ataque
//@route: POST api/ataque/crear/
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
        
        const ataque = await Ataque.create({
            id_problema: id_problema,
            id_usuario_emisor: id_usuario_emisor,
            id_usuario_receptor: id_usuario_receptor,
            id_metodo_resolucion: id_metodo_resolucion,
            timestamp: new Date(),
            tiempo: null,
            efectuo: null


        })
        
        res.status(200).json({
            ok: true,
            msg: `${ataque.id_usuario_emisor} ataco correctamente.`,
            data: {
                id_problema: id_problema,
                id_usuario_emisor: id_usuario_emisor,
                id_usuario_receptor: id_usuario_receptor,
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
            msg: 'Error al atacar.'
        })
        
    }    
}

//@desc: permite responder a un ataque
//@route: PUT api/ataque/responder/
ControladorAtaque.responderAtaque = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_usuario_receptor, id_metodo_resolucion, timestamp, efectuo} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_usuario_receptor || !id_metodo_resolucion || !timestamp || !efectuo){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Ataque.update({
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

module.exports = ControladorAtaque;