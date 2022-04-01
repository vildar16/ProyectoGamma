const ControladorProblemaCatalogo = {};
const Problema = require('../models/problemaCatalogo');
//require('dotenv').config();

//@desc: permite crear un problema del catálogo
//@route: POST api/problemas/crear/
ControladorProblemaCatalogo.crearProblema = async (req, res) => {
    console.log(req.body);
    const {id_problema, nombre, link} =req.body;
    
    try {

        if(!id_problema || !nombre || !link){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const problema = await Problema.create({
            id_problema: id_problema,
            nombre: nombre,
            link: link
        })
        
        res.status(200).json({
            ok: true,
            msg: `Problema ${problema.nombre} creado correctamente.`,
            data: {
                id_problema: problema.id_problema,
                nombre: problema.nombre,
                link: problema.link
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear problema.'
        })
        
    }    
}


//@desc: permite borrar un problema
//@route: DELETE api/problemas/borrar/
ControladorProblemaCatalogo.borrarProblema = async (req, res) => {
    console.log(req.body);
    const {id_problema} =req.body;
    
    try {

        if(!id_problema){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Problema.destroy({
            where: {
                id_problema: id_problema
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Problema borrado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar problema.'
        })
        
    }    
}



//@desc: permite actualizar un problema
//@route: PUT api/problemas/actualizar/
ControladorProblemaCatalogo.actualizarProblema = async (req, res) => {
    console.log(req.body);
    const {id_problema, nombre, link} =req.body;
    
    try {

        if(!id_problema || !nombre || !link){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Problema.update({
            nombre: nombre,
            link: link
        }, {
            where: {
                id_problema: id_problema
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Problema actualizado correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar problema.'
        })
        
    }    
}



//@desc: Obtener todos los problemas
//@route: GET api/problemas/
ControladorProblemaCatalogo.getProblemas = async (req, res) => {

    try{

        const problemas = await Problema.findAll({
            attributes: ['id_problema', 'nombre', 'link']
        })
        res.json({message: problemas });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los problemas.'
        })

    }
    
}



//@desc: Obtener un problema
//@route: GET api/problemas/:id
ControladorProblemaCatalogo.getProblema = async (req, res) => {
    console.log(req.body);
    const {id_problema} =req.body;

    try{

        const problema = await Problema.findAll({
            where: {
                id_problema: id_problema
            }
        })
        res.json({message: problema });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener el problema.'
        })

    }
    
}



module.exports = ControladorProblemaCatalogo;