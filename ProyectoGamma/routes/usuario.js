const express = require('express');
const router = express.Router();

const { crearUsuario, login, getUsuarios} = require('../controllers/ControladorUsuario');

router.route('/registro')
    .post(crearUsuario)

router.route('/login')
    .post(login)


router.route('')
    .get(getUsuarios)

module.exports = router;