const ControladorBusqueda = {};
const Busqueda = require('../models/accion');
//require('dotenv').config();

//@desc: permite crear una busqueda de usuario
//@route: POST api/busqueda/crear/
ControladorBusqueda.crearBusqueda = async (req, res) => {
    console.log(req.body);
    const {id_problema, id_usuario_emisor, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_problema || !id_usuario_emisor || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const busqueda = await Busqueda.create({
            id_problema: id_problema,
            id_usuario_emisor: id_usuario_emisor,
            id_usuario_receptor: id_usuario_emisor,
            id_metodo_resolucion: id_metodo_resolucion,
            timestamp: new Date().toJSON().slice(0, 10),
            tiempo: new Date().toJSON().slice(0, 10),
            efectuo: 2


        })
        
        res.status(200).json({
            ok: true,
            msg: `${busqueda.id_usuario_emisor} encontro un nuevo problema.`,
            data: {
                id_problema: busqueda.id_problema,
                id_usuario_emisor: busqueda.id_usuario_emisor,
                id_usuario_receptor: busqueda.id_usuario_emisor,
                id_metodo_resolucion: busqueda.id_metodo_resolucion,
                timestamp: busqueda.timestamp,
                tiempo: busqueda.tiempo
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al agregar problema encontrado por el usuario.'
        })
        
    }    
}

module.exports = ControladorBusqueda;