const express = require('express');
const router = express.Router();
const getAll = require('../controllers/test.js')

router.get('/', getAll)

module.exports = router;