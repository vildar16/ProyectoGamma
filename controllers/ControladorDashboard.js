const ControladorDashboard = {};
const Dashboard = require('../models/accion');
//require('dotenv').config();

//@desc: permite obtener todas las acciones registradas en un quest
//@route: POST api/acciones/accionesXquest/
ControladorDashboard.accionesXquest = async (req, res) => {
    const {id_quest} =req.body;
    
    try {

        if(!id_quest){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const dashboard = await sequelize.query('CALL selectAcciones(:pQuest)',
            {replacements: { pQuest: id_quest }})
        
        res.json({message: dashboard });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener acciones del quest.'
        })
        
    }    
}

//@desc: permite obtener un tipo de acciones sin asignar en un quest
//@route: POST api/acciones/tipoAccionesSinReceptor/
ControladorDashboard.tipoAccionesSinReceptorXquest = async (req, res) => {
    const {id_quest, id_usuario, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_quest || !id_usuario || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const dashboard = await sequelize.query('CALL selectTipoAccionesSinReceptor(:pQuest, :pUsuario, :pMetodo)',
            {replacements: { pQuest: id_quest, pUsuario: id_usuario, pMetodo: id_metodo_resolucion }})
        
        res.json({message: dashboard });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el tipo de acciones sin asignar del quest.'
        })
        
    }    
}

//@desc: permite obtener un tipo de acciones en un quest
//@route: POST api/acciones/tipoAcciones/
ControladorDashboard.tipoAccionesXquest = async (req, res) => {
    const {id_quest, id_usuario, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_quest || !id_usuario || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }

        const dashboard = await sequelize.query('CALL selectTipoAcciones(:pQuest, :pUsuario, :pMetodo)',
            {replacements: { pQuest: id_quest, pUsuario: id_usuario, pMetodo: id_metodo_resolucion }})
        
        res.json({message: dashboard });

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el tipo de acciones del quest.'
        })
        
    }    
}


module.exports = ControladorDashboard;