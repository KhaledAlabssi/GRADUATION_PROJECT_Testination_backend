const express = require('express');
const router = express.Router();
const answers = require('../controllers/answers')


router.post('/new', answers.newAnswer)




module.exports = router;