const ControladorUsuario = {};
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//@desc: permite registrar a un usuario
//@route: POST api/usuarios/registro/
ControladorUsuario.crearUsuario = async (req, res) => {
    console.log(req.body);
    const {nombre_usuario, apellido1, apellido2, correo, password, nombre} =req.body;
    
    try {
        //encriptado
        const salt = await bcrypt.genSaltSync();
        const passwordEncriptada = await bcrypt.hashSync(password, salt);

        if(!nombre_usuario || !apellido1 || !correo || !password || !nombre){
            res.status(400).json({
                ok: false,
                msg: 'Campos requeridos son nulos o no válidos.'
            })


        }
        
        const usuario = await Usuario.create({
            nombre_usuario: nombre_usuario,
            nombre: nombre,
            apellido1: apellido1,
            apellido2: apellido2,
            correo: correo,
            password: passwordEncriptada,
            id_tipo_usuario: "1"
        })

        
        
       res.status(200).json({
            ok: true,
            msg: `Usuario ${usuario.nombre} creado correctamente.`,
            data: usuario

        })

    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al crear usuario.'
        })
        
    }    
}

//@desc: permite autenticar a un usuario
//@route: POST api/usuarios/login/
ControladorUsuario.login = async (req, res) => {

    const {correo, password} = req.body;

    const [usuario]  = await Usuario.findAll({

        where: {
            correo: correo
        }
    })

    const datosUsuario = usuario.dataValues;
    console.log(process.env.JWT_SECRET);
   if(datosUsuario && (await bcrypt.compare(password, datosUsuario.password))){
        return res.status(200).json({
            ok: true,
            msg: `Usuario ${datosUsuario.nombre} logueado correctamente.`,
            data: {
                nombre_usuario: datosUsuario.nombre_usuario,
                correo: datosUsuario.correo,
                nombre: datosUsuario.nombre,
                apellido1: datosUsuario.apellido1

            }
        })
    }else{
        return res.status(500).json({
            ok: false,
            msg: 'Error al loguearse, contraseña o correo incorrecto.'
        })



    }
    
}


//@desc: permite autenticar a un usuario
//@route: GET api/usuarios/
ControladorUsuario.getUsuarios = async (req, res) => {

    try{
        const usuarios = await Usuario.findAll({
            attributes: ['nombre_usuario', 'nombre', 'apellido1']
        })


        res.json({message: usuarios });
    }catch(error){
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener los usuarios.'
        })

    }
    
}


ControladorUsuario.generarJWT = async (nombre_usuario) =>{
    console.log(process.env.JWT_SECRET);
    return jwt.sign({nombre_usuario}, process.env.JWT_SECRET)
}




module.exports = ControladorUsuario;