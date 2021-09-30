const express = require('express');
const router = express.Router();
const assignments = require('../controllers/assignments')

router.post('/assignTest', assignments.assignTest)
router.get('/all', assignments.assignments)
module.exports = router;