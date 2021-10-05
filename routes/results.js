const express = require('express');
const router = express.Router();
const result = require('../controllers/results')


router.get('/allResults', result.allResults)


module.exports = router;