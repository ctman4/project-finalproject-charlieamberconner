const express = require('express');
const users = require('./controllers/users');
const lists = require('./controllers/lists');

const router = express.Router();

// Handle user requests
router.get('/users', users.index);

// Handle list requests
router.get('/lists', lists.index);
router.get('/lists/:id', lists.retrieve);

module.exports = router;
