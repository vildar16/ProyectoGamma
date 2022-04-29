const express = require('express');
const router = express.Router();

const { crearAyuda, asignarAyuda, responderAyuda} = require('../controllers/ControladorAyuda');

router.route('/crear')
    .post(crearAyuda)

router.route('/asingar')
    .post(asignarAyuda)

router.route('/responder')
    .post(responderAyuda)

module.exports = router;