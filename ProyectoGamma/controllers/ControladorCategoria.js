const ControladorCategoria = {};
const Categoria = require('../models/Categoria');
//require('dotenv').config();

//@desc: permite crear una categoría
//@route: POST api/categorias/crear/
ControladorCategoria.crearCategoria = async (req, res) => {
    console.log(req.body);
    const {nombre, color} =req.body;
    
    try {

        if(!nombre || !color){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        const categoria = await Categoria.create({
            nombre: nombre,
            color: color
        })
        
        res.status(200).json({
            ok: true,
            msg: `Categoría ${categoria.nombre} creada correctamente.`,
            data: {
                nombre: categoria.nombre,
                color: categoria.color
            }
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear categoría.'
        })
        
    }    
}


//@desc: permite borrar una categoría
//@route: DELETE api/categorias/borrar/
ControladorCategoria.borrarCategoria = async (req, res) => {
    console.log(req.body);
    const {id_categoria} =req.body;
    
    try {

        if(!id_categoria){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Categoria.destroy({
            where: {
                id_categoria: id_categoria
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Categoría borrada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al borrar categoría.'
        })
        
    }    
}



//@desc: permite actualizar una categoría
//@route: PUT api/categorias/actualizar/
ControladorCategoria.actualizarCategoria = async (req, res) => {
    console.log(req.body);
    const {id_categoria, nombre, color} =req.body;
    
    try {

        if(!id_categoria || !nombre || !color){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })
        }
        
        await Categoria.update({
            nombre: nombre,
            color: color
        }, {
            where: {
                id_categoria: id_categoria
            }
        })
        
        res.status(200).json({
            ok: true,
            msg: `Categoría actualizada correctamente.`,
        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al actualizar categoría.'
        })
        
    }    
}



//@desc: Obtener todas las categorías
//@route: GET api/categorias/
ControladorCategoria.getCategorias = async (req, res) => {

    try{

        const categorias = await Categoria.findAll({
            attributes: ['nombre', 'color']
        })
        res.json({message: categorias });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener las categorías.'
        })

    }
    
}


module.exports = ControladorCategoria;