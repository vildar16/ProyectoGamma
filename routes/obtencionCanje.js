const express = require('express');
const router = express.Router();

const { crearCanje, actualizarAchivers, actualizarHelpers, actualizarKillers, actualizarBuscador, canjearGlobo, todosJugadores} = require('../controllers/ControladorObtencionCanje');

router.route('/crear')
    .post(crearCanje)

router.route('/achivers')
    .put(actualizarAchivers)

router.route('/helpers')
    .put(actualizarHelpers)

router.route('/killers')
    .put(actualizarKillers)

router.route('/buscador')
    .put(actualizarBuscador)

router.route('/globos')
    .put(canjearGlobo)

    router.route('/getCanjes')
    .get(todosJugadores)

module.exports = router;