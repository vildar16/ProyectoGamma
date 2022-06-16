const express = require('express');
const router = express.Router();

const { crearAtaque, responderAtaque, ataqueRevisado} = require('../controllers/ControladorAtaque');

router.route('/crear')
    .post(crearAtaque)

router.route('/responder')
    .put(responderAtaque)

router.route('/revisado')
    .put(ataqueRevisado)

module.exports = router;