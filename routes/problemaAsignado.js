const express = require('express');
const router = express.Router();

const { crearProblemaUsuario, borrarProblemaUsuario, actualizarProblemaUsuario, getAsignados, getAsignado, getAsignadosXquest, getAsignadosXquestSinRevisar , asignarProblemasQuest, compilar, subirSolucion, actualizarEstadoAsignacion, actualizarEstadoAsignacionRechazado} = require('../controllers/ControladorProblemaAsignado');

router.route('/crear')
    .post(crearProblemaUsuario)

router.route('/repartir')
    .post(asignarProblemasQuest)

router.route('/borrar')
    .delete(borrarProblemaUsuario)

router.route('/actualizar')
    .put(actualizarProblemaUsuario)

router.route('/solucion')
    .put(subirSolucion)

router.route('/estadoasignacion')
    .put(actualizarEstadoAsignacion)

router.route('/estadorechazado')
    .put(actualizarEstadoAsignacionRechazado)

router.route('/xquest')
    .get(getAsignadosXquest)

router.route('/xquest_sinrevisar')
    .get(getAsignadosXquestSinRevisar)

router.route('')
    .get(getAsignados)

router.route('/:id')
    .get(getAsignado)

router.route('/compilar')
    .post(compilar)


module.exports = router;