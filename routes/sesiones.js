const express = require('express');
const router = express.Router();

const { crearSesion, borrarSesion, actualizarSesion, getSesiones, getSesion, getCategorias_x_quest, usuarios_x_quest, problemasUsuarioSesion, setUsuariosCSV} = require('../controllers/ControladorSesion');

router.route('/crear')
    .post(crearSesion)

router.route('/borrar')
    .delete(borrarSesion)

router.route('/actualizar')
    .put(actualizarSesion)

router.route('/problemas_usuario_sesion')
    .post(problemasUsuarioSesion)

router.route('')
    .get(getSesiones)

router.route('/categorias_x_quest/:id_sesion')
    .get(getCategorias_x_quest)

router.route('/:codigo_sesion')
    .get(getSesion)

router.route('/usuarios_x_quest/:codigo_quest')
    .get(usuarios_x_quest)


module.exports = router;