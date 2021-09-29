const express = require('express');
const router = express.Router();
const assignments = require('../controllers/assignments')

router.post('/assignTest', assignments.assignTest)

module.exports = router;