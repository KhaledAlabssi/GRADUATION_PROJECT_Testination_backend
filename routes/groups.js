const express = require('express');
const router = express.Router();
const getGroups = require('../controllers/groups')


router.get('/', getGroups.getAllGroups)

router.post('/new', getGroups.createGroup)

router.get('/:name', getGroups.getGroup)

module.exports = router;