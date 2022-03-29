const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const { crearUsuario, login, getUsuarios, autorizacion} = require('../controllers/ControladorUsuario');

router.route('/registro')
    .post(crearUsuario)

router.route('/login')
    .post(login)

router.get('/auth', auth, autorizacion)

router.route('')
    .get(getUsuarios)

module.exports = router;