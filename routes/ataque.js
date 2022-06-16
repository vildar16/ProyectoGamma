const express = require('express');
const router = express.Router();

const { crearAtaque, responderAtaque, ataqueRevisado} = require('../controllers/ControladorAtaque');

router.route('/crear')
    .post(crearAtaque)

router.route('/responder')
    .post(responderAtaque)

router.route('/revisado')
    .post(ataqueRevisado)

module.exports = router;