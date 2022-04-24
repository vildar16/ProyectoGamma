const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { crearUsuario, login, getUsuarios, autorizacion, ingresarSesion, sesiones_x_usuario} = require('../controllers/ControladorUsuario');

router.route('/registro')
    .post(crearUsuario)

router.route('/login')
    .post(login)

router.route('/ingresar_sesion')
    .post(ingresarSesion)

router.route('/sesiones_x_usuario/:nombre_usuario')
    .get(sesiones_x_usuario)

router.get('/auth', auth, autorizacion)

router.route('')
    .get(getUsuarios)

module.exports = router;