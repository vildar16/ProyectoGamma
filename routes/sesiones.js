const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones, getSesion, getCategorias_x_quest, usuarios_x_quest, problemasUsuarioSesion} = require('../controllers/ControladorSesion');

router.route('/crear')
    .post(crearSesion)

router.route('/borrar')
    .delete(borrarSesion)

router.route('/actualizar')
    .put(actualizarSesion)

router.route('/problemas_usuario_sesion')
    .get(problemasUsuarioSesion)

router.route('')
    .get(getSesiones)

router.route('/categorias_x_quest/:id_sesion')
    .get(getCategorias_x_quest)

router.route('/:codigo_sesion')
    .get(getSesion)

router.route('/usuarios_x_sesion/:codigo_sesion')
    .get(usuarios_x_quest)

module.exports = router;