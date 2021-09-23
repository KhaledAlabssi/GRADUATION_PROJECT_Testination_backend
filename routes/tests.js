const express = require('express');
const router = express.Router();
const getTests = require('../controllers/tests.js')

router.get('/', getTests.alltests)

router.get('/:name', getTests.test)

module.exports = router;