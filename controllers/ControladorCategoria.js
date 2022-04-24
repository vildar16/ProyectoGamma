const ControladorCategoria = {};
const Categoria = require('../models/categoria');
//require('dotenv').config();

//@desc: permite crear una categoría
//@route: POST api/categorias/crear/
ControladorCategoria.crearCategoria = async (req, res) => {
    console.log(req.body);
    const {nombre, color, id_sesion} =req.body;
    
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
        const cat = await setCategoria(categoria.id_categoria, id_sesion)
        
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
            attributes: ['id_categoria', 'nombre', 'color']
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



//@desc: Obtener una categoría
//@route: GET api/categorias/:id
ControladorCategoria.getCategoria = async (req, res) => {
    console.log(req.body);
    const {id_categoria} =req.body;

    try{

        const categoria = await Categoria.findAll({
            where: {
                id_categoria: id_categoria
            }
        })
        res.json({message: categoria });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener la categoría.'
        })

    }
    
}



const setCategoria = async (id_categoria, id_sesion) => {

    try{

        const sesion_x_categoria = await sequelize.query(`INSERT INTO categorias_x_sesion (id_categoria, id_sesion) VALUES (${id_categoria}, ${id_sesion})`)

        return sesion_x_categoria

    }catch(error){

        console.log(error)
        return 'Error al asignar categoría.'

    }
    
}



module.exports = ControladorCategoria;