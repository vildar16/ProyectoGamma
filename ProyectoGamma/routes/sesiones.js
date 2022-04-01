const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones} = require('../controllers/ControladorSesion');

router.route('/crear')
    .post(crearSesion)

router.route('/borrar')
    .delete(borrarSesion)

router.route('/actualizar')
    .put(actualizarSesion)

router.route('')
    .get(getSesiones)

module.exports = router;