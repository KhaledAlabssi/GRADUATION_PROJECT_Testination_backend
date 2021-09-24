const express = require('express');
const router = express.Router();
const getstudents = require('../controllers/students')


router.get('/', getstudents.allstudents)


module.exports = router;