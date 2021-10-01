const express = require('express');
const router = express.Router();
const test = require('../controllers/test')





router.get('/:id', test.questionsById)
router.get('/answers/:id', test.answersById)

module.exports = router;