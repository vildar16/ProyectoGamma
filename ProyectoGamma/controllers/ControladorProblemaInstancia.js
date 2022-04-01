const ControladorProblemaInstancia = {};
const ProblemaInstancia = require('../models/problemaInstancia');
//require('dotenv').config();

//@desc: permite crear una instancia a un problema
//@route: POST api/instancias/crear/
ControladorProblemaInstancia.crearProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_usuario, id_problema_catalogo, id_metodo_resolucion} =req.body;
    
    try {

        if(!id_usuario || !id_problema_catalogo || !id_metodo_resolucion){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const instancia = await ProblemaInstancia.create({
            resuelto: 0,
            id_usuario: id_usuario,
            id_problema_catalogo: id_problema_catalogo,
            id_metodo_resolucion: id_metodo_resolucion
        })
        
        res.status(200).json({
            ok: true,
            msg: `Instancia creada correctamente.`,
            data: {
                resuelto: instancia.resuelto,
                id_usuario: instancia.id_usuario,
                id_problema_catalogo: instancia.id_problema_catalogo,
                id_metodo_resolucion: instancia.id_metodo_resolucion
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear instancia.'
        })
        
    }    
}


//@desc: permite borrar una instancia
//@route: DELETE api/instancias/borrar/
ControladorProblemaInstancia.borrarProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_problemaInstancia} =req.body;
    
    try {

        if(!id_problemaInstancia){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaInstancia.destroy({
            where: {
                id_problemaInstancia: id_problemaInstancia
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Instancia borrada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar instancia.'
        })
        
    }    
}



//@desc: permite actualizar una instancia
//@route: PUT api/instancias/actualizar/
ControladorProblemaInstancia.actualizarProblemaUsuario = async (req, res) => {
    console.log(req.body);
    const {id_problemaInstancia, resuelto} =req.body;
    
    try {

        if(!id_problemaInstancia || !resuelto){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await ProblemaInstancia.update({
            resuelto: resuelto
        }, {
            where: {
                id_problemaInstancia: id_problemaInstancia
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Instancia actualizada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar instancia.'
        })
        
    }    
}



//@desc: Obtener todas las instancias
//@route: GET api/instancias/
ControladorProblemaInstancia.getInstancias = async (req, res) => {

    try{

        const instancias = await ProblemaInstancia.findAll({
            attributes: ['id_problemaInstancia', 'id_usuario', 'id_problema_catalogo', 'id_metodo_resolucion', 'resuelto']
        })
        res.json({message: instancias });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las instancias.'
        })

    }
    
}



//@desc: Obtener una instancia de un problema
//@route: GET api/instancias/:id
ControladorProblemaInstancia.getInstancia = async (req, res) => {
    console.log(req.body);
    const {id_problemaInstancia} =req.body;

    try{

        const instancia = await ProblemaInstancia.findAll({
            where: {
                id_problemaInstancia: id_problemaInstancia
            }
        })
        res.json({message: instancia });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la instancia al problema.'
        })

    }
    
}



module.exports = ControladorProblemaInstancia;