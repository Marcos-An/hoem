const express = require('express');
const controller = require('../controller');
const router = express.Router();

router.get('/', controller.get);
router.get('/:id_imovel', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
