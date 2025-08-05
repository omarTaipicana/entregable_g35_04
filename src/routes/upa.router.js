const { getAll, create, getOne, remove, update } = require('../controllers/upa.controllers');
const express = require('express');

const upaRouter = express.Router();

upaRouter.route('/upas')
    .get(getAll)
    .post(create);

upaRouter.route('/upas/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = upaRouter;