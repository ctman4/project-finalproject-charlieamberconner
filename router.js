const express = require('express');
const users = require('./controllers/users');
const lists = require('./controllers/lists');

const router = express.Router();

/*
// Handle user requests
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
*/

// Handle home-page requests
router.get('/', function(request, response) {
  response.render('index');
});

// Handle login requests
router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

router.get('/users', users.index);

router.get('/users/:id', users.retrieve);

// Handle list requests
router.get('/lists', lists.index);

router.get('/lists/:id', lists.retrieve);

router.post('/lists/:id', lists.claim);


module.exports = router;
