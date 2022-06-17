const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { crearUsuario, login, getUsuarios, getUsuariosAtacar, autorizacion, ingresarSesion, sesiones_x_usuario, setUsuariosCSV} = require('../controllers/ControladorUsuario');

router.route('/registro')
    .post(crearUsuario)

router.route('/login')
    .post(login)

router.route('/ingresar_sesion')
    .post(ingresarSesion)

router.route('/csv-usuarios/:codigo_quest')
    .post(setUsuariosCSV)

router.route('/atacar')
    .post(getUsuariosAtacar)    

router.route('/sesiones_x_usuario/:nombre_usuario')
    .get(sesiones_x_usuario)

router.get('/auth', auth, autorizacion)

router.route('')
    .get(getUsuarios)

module.exports = router;