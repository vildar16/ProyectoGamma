const express = require('express');
const router = express.Router();

const { accionesXquest, tipoAccionesXquest, tipoAccionesSinReceptorXquest} = require('../controllers/ControladorDashboard');

router.route('/accionesXquest')
    .post(accionesXquest)

router.route('/tipoAccionesSinReceptor')
    .get(tipoAccionesSinReceptorXquest)

router.route('/tipoAcciones')
    .get(tipoAccionesXquest)

module.exports = router;