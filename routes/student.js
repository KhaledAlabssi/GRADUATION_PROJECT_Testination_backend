const express = require('express');
const router = express.Router();
const student = require('../controllers/student')

router.post('/getStudent', student.getStudent)
router.post('/getStudentTest', student.getStudentTest)


module.exports = router;