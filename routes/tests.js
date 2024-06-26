const express = require('express');
const router = express.Router();
const getTests = require('../controllers/tests.js')

router.get('/', getTests.alltests)
router.post('/new', getTests.createTest)

router.get('/:id', getTests.test)

module.exports = router;