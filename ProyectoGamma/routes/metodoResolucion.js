const express = require('express');
const router = express.Router();

const { crearMetodo, borrarMetodos, actualizarMetodo, getMetodos, getMetodo} = require('../controllers/ControladorMetodoResolucion');

router.route('/crear')
    .post(crearMetodo)

router.route('/borrar')
    .delete(borrarMetodos)

router.route('/actualizar')
    .put(actualizarMetodo)

router.route('')
    .get(getMetodos)

router.route('/:id')
    .get(getMetodo)

module.exports = router;