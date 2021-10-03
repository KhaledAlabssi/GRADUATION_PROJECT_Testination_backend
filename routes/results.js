const express = require('express');
const router = express.Router();
const result = require('../controllers/results')


router.post('/submit', result.submit)


module.exports = router;