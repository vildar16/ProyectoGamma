const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones, getSesion, getCategorias_x_sesion, usuarios_x_sesiones} = require('../controllers/ControladorSesion');

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

router.route('/usuarios_x_sesion/:codigo_sesion')
    .get(usuarios_x_sesiones)

module.exports = router;