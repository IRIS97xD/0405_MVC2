const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

router.get('/', controller.main);
router.get('/visitor', controller.getvisitors);

module.exports = router;