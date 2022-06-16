const express = require('express');
const router = express.Router();

const { crearAyuda, asignarAyuda, responderAyuda, revisarAyuda} = require('../controllers/ControladorAyuda');

router.route('/crear')
    .post(crearAyuda)

router.route('/asignar')
    .put(asignarAyuda)

router.route('/responder')
    .put(responderAyuda)

router.route('/revisar')
    .put(revisarAyuda)

module.exports = router;