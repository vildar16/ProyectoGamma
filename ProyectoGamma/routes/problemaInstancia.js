const express = require('express');
const router = express.Router();

const { crearProblemaUsuario, borrarProblemaUsuario, actualizarProblemaUsuario, getInstancias} = require('../controllers/ControladorProblemaInstancia');

router.route('/crear')
    .post(crearProblemaUsuario)

router.route('/borrar')
    .delete(borrarProblemaUsuario)

router.route('/actualizar')
    .put(actualizarProblemaUsuario)

router.route('')
    .get(getInstancias)

module.exports = router;