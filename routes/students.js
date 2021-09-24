const express = require('express');
const router = express.Router();
const getstudents = require('../controllers/students')


router.get('/', getstudents.allstudents)

router.post('/new', getstudents.createStudent)

router.get('/:name', getstudents.getStudent)


module.exports = router;