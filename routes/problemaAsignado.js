const express = require('express');
const router = express.Router();

const { crearProblemaUsuario, borrarProblemaUsuario, actualizarProblemaUsuario, getAsignados, getAsignado} = require('../controllers/ControladorProblemaAsignado');

router.route('/crear')
    .post(crearProblemaUsuario)

router.route('/borrar')
    .delete(borrarProblemaUsuario)

router.route('/actualizar')
    .put(actualizarProblemaUsuario)

router.route('')
    .get(getAsignados)

router.route('/:id')
    .get(getAsignado)

module.exports = router;