const express = require('express');
const router = express.Router();

const { crearCategoria, borrarCategoria, actualizarCategoria, getCategorias, getCategoria} = require('../controllers/ControladorCategoria');

router.route('/crear')
    .post(crearCategoria)

router.route('/borrar')
    .delete(borrarCategoria)

router.route('/actualizar')
    .put(actualizarCategoria)

router.route('')
    .get(getCategorias)

router.route('/:id')
    .get(getCategoria)

module.exports = router;