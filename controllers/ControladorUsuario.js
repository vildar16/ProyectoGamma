const ControladorUsuario = {};
//const Usuario = require('../models/usuario');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// .csv
const busboy = require('connect-busboy');
const fs = require('fs');
const CSVToJSON = require('csvtojson');

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

        const sesion_x_usuario = await sequelize.query(`INSERT INTO usuarios_x_quest (id_usuario, id_sesion) VALUES ("${nombre_usuario}", ${codigo_sesion})`)
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
        
        const [sesion_x_usuario] = await sequelize.query(`SELECT s.codigo_sesion, s.nombre_sesion FROM quest s JOIN usuarios_x_quest uxs on s.codigo_sesion = uxs.id_sesion WHERE uxs.id_usuario = "${nombre_usuario}"`)
        res.json({message: sesion_x_usuario });

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al obtener sesiones del usuario.'
        })

    }
    
}


//@desc: agrega usuarios a una sesion por medio de un csv
//@route: POST api/usuarios/csv-usuarios/:codigo_quest
ControladorUsuario.setUsuariosCSV = async (req, res) => {
    
    try {
        const {codigo_quest} =req.params;
        var filePath = '';
        req.busboy.on('file', async function (fieldname, file, filename) {
            console.log("received file")
            filePath = './csv/' + filename.filename;
            var fstream = fs.createWriteStream(filePath);
            file.pipe(fstream);
            fstream.on('close', async function () {
                console.log("upload succeeded!")
                fstream.end()
                await leerArchivo(filePath, codigo_quest);
            });
        });
        req.pipe(req.busboy);

        res.status(500).json({
            ok: true,
            msg: 'Usuarios agregados correctamente al quest.'
        })

    }catch(error){

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error al ingresar usuarios por medio de csv.'
        })

    }
    
}

async function leerArchivo(filePath, codigo_quest) {
    try {
        var list1 = `INSERT INTO usuario (nombre_usuario, nombre, apellido1, apellido2, correo, password, id_tipo_usuario)
                    VALUES `;
        var list2 = `INSERT INTO usuarios_x_quest (id_usuario, id_sesion)
                    VALUES `;
        CSVToJSON().fromFile(filePath)
        .then(users => {
            users.forEach(element => {
                //Encriptado
                if (
                    element.nombre_usuario != '' || 
                    element.nombre != '' || 
                    element.apellido1 != '' || 
                    element.apellido2 != '' || 
                    element.correo != '' || 
                    element.password != '' || 
                    element.id_tipo_usuario != ''
                    )
                {
                    var salt = bcrypt.genSaltSync();
                    var passwordEncriptada = bcrypt.hashSync(element.password, salt);
                    list1 += `('${element.nombre_usuario}','${element.nombre}','${element.apellido1}','${element.apellido2}','${element.correo}','${passwordEncriptada}','${element.id_tipo_usuario}'),`
                    list2 += `('${element.nombre_usuario}','${codigo_quest}'),`
                }
            });
            var listUsr = list1.slice(0, -1) + `;`;
            var listUXQ = list2.slice(0, -1) + `;`;
            console.log(listUsr)
            sequelize.query(listUsr)
            console.log(listUXQ)
            sequelize.query(listUXQ)
        return
    })
    }catch(error){
        console.log(error)
        return
    }

}


module.exports = ControladorUsuario;