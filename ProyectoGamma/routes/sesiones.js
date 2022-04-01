const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones, getSesion} = require('../controllers/ControladorSesion');

router.route('/crear')
    .post(crearSesion)

router.route('/borrar')
    .delete(borrarSesion)

router.route('/actualizar')
    .put(actualizarSesion)

router.route('')
    .get(getSesiones)

router.route('/:id')
    .get(getSesion)

module.exports = router;