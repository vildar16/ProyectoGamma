const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones, getSesion, getCategorias_x_sesion} = require('../controllers/ControladorSesion');

router.route('/crear')
    .post(crearSesion)

router.route('/borrar')
    .delete(borrarSesion)

router.route('/actualizar')
    .put(actualizarSesion)

router.route('')
    .get(getSesiones)

router.route('/categorias_x_sesion/:id_sesion')
    .get(getCategorias_x_sesion)

router.route('/:codigo_sesion')
    .get(getSesion)

module.exports = router;