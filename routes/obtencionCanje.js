const express = require('express');
const router = express.Router();

const { crearCanje, actualizarAchivers, actualizarHelpers, actualizarKillers, actualizarBuscador, canjearGlobo, todosJugadores, precioGlobo} = require('../controllers/ControladorObtencionCanje');

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
    .post(todosJugadores)

router.route('/precioGlobo')
    .post(precioGlobo)

module.exports = router;