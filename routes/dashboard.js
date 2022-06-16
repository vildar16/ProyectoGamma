const express = require('express');
const router = express.Router();

const { accionesXquest, tipoAccionesXquest, tipoAccionesSinReceptorXquest} = require('../controllers/ControladorDashboard');

router.route('/accionesXquest')
    .get(accionesXquest)

router.route('/tipoAccionesSinReceptor')
    .get(tipoAccionesXquest)

router.route('/tipoAcciones')
    .get(tipoAccionesSinReceptorXquest)

module.exports = router;