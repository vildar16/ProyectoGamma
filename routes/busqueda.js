const express = require('express');
const router = express.Router();

const { crearBusqueda } = require('../controllers/ControladorBusqueda');

router.route('/crear')
    .post(crearBusqueda)

module.exports = router;