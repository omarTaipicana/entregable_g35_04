const express = require('express');
const userRouter = require('./user.router');
const senpladesRouter = require('./senplades.router');
const variablesRouter = require('./variables.router');
const upaRouter = require('./upa.router');
const router = express.Router();

// colocar las rutas aquí
router.use(userRouter)
router.use(senpladesRouter)
router.use(variablesRouter)
router.use(upaRouter)

module.exports = router;