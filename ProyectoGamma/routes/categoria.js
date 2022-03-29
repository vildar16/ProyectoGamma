const express = require('express');
const router = express.Router();

const { crearCategoria, borrarCategoria, actualizarCategoria, getCategorias} = require('../controllers/ControladorCategoria');

router.route('/crear')
    .post(crearCategoria)

router.route('/borrar')
    .delete(borrarCategoria)

router.route('/actualizar')
    .put(actualizarCategoria)

router.route('')
    .get(getCategorias)

module.exports = router;