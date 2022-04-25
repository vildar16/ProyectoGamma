const express = require('express');
const router = express.Router();

const { crearTipoUsuario, borrarTipoUsuario, actualizarTipoUsuario, getTiposUsuario, getTipoUsuario } = require('../controllers/ControladorTipoUsuario');

router.route('/crear')
    .post(crearTipoUsuario)

router.route('/borrar')
    .delete(borrarTipoUsuario)

router.route('/actualizar')
    .put(actualizarTipoUsuario)

router.route('')
    .get(getTiposUsuario)

router.route('/:id')
    .get(getTipoUsuario)

module.exports = router;