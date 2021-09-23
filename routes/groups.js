const express = require('express');
const router = express.Router();
// const blank = require('../controllers/test.js')

router.get('/', (req, res) => {
    res.send('Groups Page')
})

router.get('/:name', (req, res) => {
    res.send(`I'm here with group: ${req.params.name}`)

})

module.exports = router;