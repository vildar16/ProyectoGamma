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
            data: {
                nombre_usuario: usuario.nombre_usuario,
                correo: usuario.correo,
                nombre: usuario.nombre,
                apellido1: usuario.apellido1,
                token: await generarJWT(usuario.correo)

            }

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
    try {
        
        const {correo, password} = req.body;
    
        const usuario = await Usuario.findOne({ where: { correo: correo } });
        
        
    
       if(!(usuario===null) && usuario.dataValues && (await bcrypt.compare(password, usuario.dataValues.password))){
    
            const datosUsuario = usuario.dataValues;
    
            return res.status(200).json({
                ok: true,
                msg: `Usuario ${datosUsuario.nombre} logueado correctamente.`,
                data: {
                    nombre_usuario: datosUsuario.nombre_usuario,
                    correo: datosUsuario.correo,
                    nombre: datosUsuario.nombre,
                    apellido1: datosUsuario.apellido1,
                    token: await generarJWT(usuario.correo),
                    id_tipo_usuario: datosUsuario.id_tipo_usuario
    
                }
            })
        }else{
            return res.status(400).json({
                ok: false,
                msg: 'Error al loguearse, contraseña o correo incorrecto.'
            })
    
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al loguearse.'
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


ControladorUsuario.autorizacion = async(req, res) =>{
    try{

        console.log(req.correo);
        const [usuario]  = await Usuario.findAll({
    
            where: {
                correo: req.correo.correo
            }
        })
    
        const datosUsuario = usuario.dataValues;
    
        res.status(200).json({
            correo: datosUsuario.correo,
            nombre_usuario: datosUsuario.nombre_usuario,
            nombre: datosUsuario.nombre,
            apellido1: datosUsuario.apellido1
        })
    }catch(err){
        console.error(err.message);
      res.json({
        error: "Error, usuario no autorizado",
      });
    }
}

const generarJWT = async (correo) =>{
    const token = await jwt.sign({correo}, process.env.JWT_SECRET, {expiresIn: '20d'})
    return token
}



//@desc: permite ingresar un usuario a una sesion
//@route: POST api/usuarios/ingresar_sesion
ControladorUsuario.ingresarSesion = async (req, res) => {
    console.log(req.body);
    const {nombre_usuario, codigo_sesion} =req.body;

    try{

        const sesion_x_usuario = await sequelize.query(`INSERT INTO usuarios_x_sesion (id_usuario, id_sesion) VALUES ("${nombre_usuario}", ${codigo_sesion})`)
        res.json({message: sesion_x_usuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al asignar usuario a la sesión.'
        })

    }
    
}



//@desc: obtiene sesiones de un usuario
//@route: GET api/usuarios/sesiones_x_usuario
ControladorUsuario.sesiones_x_usuario = async (req, res) => {
    console.log(req.body);
    const {nombre_usuario} =req.params;

    try{
        
        const [sesion_x_usuario] = await sequelize.query(`SELECT s.codigo_sesion, s.nombre_sesion FROM sesion s JOIN usuarios_x_sesion uxs on s.codigo_sesion = uxs.id_sesion WHERE uxs.id_usuario = "${nombre_usuario}"`)
        res.json({message: sesion_x_usuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener sesiones del usuario.'
        })

    }
    
}


module.exports = ControladorUsuario;