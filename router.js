const express = require('express');
const users = require('./controllers/users');
const list = require('./controllers/list');

const router = express.Router();

// Handle user requests
router.get('/users', users.index);

// Handle list requests
router.get('/list', list.index);

module.exports = router;
