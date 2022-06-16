const express = require('express');
const router = express.Router();

const { crearCanje, actualizarAchivers, actualizarHelpers, actualizarKillers, actualizarBuscador, canjearGlobo} = require('../controllers/ControladorObtencionCanje');

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

module.exports = router;