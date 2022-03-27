const ControladorUsuario = {};
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

ControladorUsuario.crearUsuario = async (req, res) => {
    console.log(req.body);
    const {nombre_usuario, apellido1, apellido2, correo, password, nombre} =req.body;
    
    try {
        //encriptado
        const salt = await bcrypt.genSaltSync();
        const passwordEncriptada = await bcrypt.hashSync(password, salt);

        console.log('API debug');
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
            usuario: usuario,
            msg: 'OK'
    }
       )
    } catch (error) {

        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Error.'
        })
        
    }    
}




module.exports = ControladorUsuario;