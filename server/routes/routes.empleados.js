const express = require ('express');
const router = express.Router();
const Empleado = require('../controllers/controlador.empeado');


router.get('/', Empleado.enviarEmpleados);
router.post('/', Empleado.cearEmpleado);
router.get ('/:id', Empleado.enviarEmpleado);
router.put('/:id', Empleado.editarEmpleado);
router.delete('/:id', Empleado.eliminarEmpleado);

module.exports = router;