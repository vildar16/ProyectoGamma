const express = require('express');
const router = express.Router();

const { crearProblema, borrarProblema, actualizarProblema, getProblemasCategoria, getProblemas, getProblema} = require('../controllers/ControladorProblemaCatalogo');

router.route('/crear')
    .post(crearProblema)

router.route('/borrar')
    .delete(borrarProblema)

router.route('/actualizar')
    .put(actualizarProblema)

router.route('/problemascategoria')
    .get(getProblemasCategoria)

router.route('')
    .get(getProblemas)

router.route('/:id')
    .get(getProblema)


module.exports = router;