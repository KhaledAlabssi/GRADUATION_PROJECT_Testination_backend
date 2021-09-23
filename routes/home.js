const express = require('express');
const router = express.Router();
// const blank = require('../controllers/test.js')

router.get('/', (req, res) => {
    res.send('Main Page')
})

module.exports = router;