const express = require('express');
const router = express.Router();
const getQuestions = require('../controllers/questions')


router.get('/', getQuestions.allQuestions)


module.exports = router;