const express = require('express');
const users = require('./controllers/users');
const lists = require('./controllers/lists');

const router = express.Router();

/*
// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.admin) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};
*/


// Handle user requests
router.get('/users', users.index);

// Handle list requests
router.get('/lists', lists.index);


module.exports = router;
