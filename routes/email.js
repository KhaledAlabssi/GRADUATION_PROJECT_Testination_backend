const express = require('express');
const {SentQuoteEmail} = require('../controllers/email.js')

const router = express.Router();

router.post('/', SentQuoteEmail);

module.exports = router