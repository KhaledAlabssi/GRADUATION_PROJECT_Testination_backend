const express = require('express');
const router = express.Router();
const test = require('../controllers/test')





router.get('/:id', test.questionsById)

module.exports = router;