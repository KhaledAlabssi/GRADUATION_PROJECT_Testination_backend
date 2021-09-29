const express = require('express');
const router = express.Router();
const getQuestions = require('../controllers/questions')

router.get('/', getQuestions.allQuestions)
router.post('/new', getQuestions.createQuestion)
router.post('/toTest', getQuestions.questionToTest)
router.get('/current', getQuestions.currentQuestion)
router.post('/addAnswer', getQuestions.addAnswer)

router.get('/:body', getQuestions.getQuestion);

module.exports = router;