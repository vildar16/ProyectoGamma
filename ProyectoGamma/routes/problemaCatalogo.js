const express = require('express');
const router = express.Router();

const { crearProblema, borrarProblema, actualizarProblema, getProblemas} = require('../controllers/ControladorProblemaCatalogo');

router.route('/crear')
    .post(crearProblema)

router.route('/borrar')
    .delete(borrarProblema)

router.route('/actualizar')
    .put(actualizarProblema)

router.route('')
    .get(getProblemas)

module.exports = router;