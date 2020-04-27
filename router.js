const express = require('express');
const users = require('./controllers/users');
const lists = require('./controllers/lists');
const User = require('../models/users');

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
// Handle home-page requests
router.get('/users', function(request, response) {
  response.render('/users/index', {users: users});
});

// Handle login requests
router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

// Handle list requests
router.get('/lists', lists.index);

router.get('/lists/:id', lists.retrieve);


module.exports = router;
