const express = require('express');
const router = express.Router();

const { crearAtaque, responderAtaque} = require('../controllers/ControladorAtaque');

router.route('/crear')
    .post(crearAtaque)

router.route('/responder')
    .post(responderAtaque)

module.exports = router;