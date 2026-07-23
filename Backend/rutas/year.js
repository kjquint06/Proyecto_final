const express = require('express');
const router = express.Router();

const controller = require('../Controller/yearController');

router.get('/', controller.list);
router.post('/', controller.save);
router.get('/:id', controller.edit);
router.post('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;
