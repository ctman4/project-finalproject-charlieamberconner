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

// handle create page requests
router.get('/create', function(request, response) {
  response.render('create');
});

// create new user
router.post('/users', users.create);

// Handle login requests
router.post('/login', users.login);

// Handle logout requests
router.get('/logout', function(request, response) {
  request.session.user = undefined;
  response.redirect('/');
});

// handle user requests
router.get('/users', users.index);

router.get('/users/:id', users.retrieve);

// Handle list requests
router.get('/lists', lists.index);

router.get('/lists/:id', lists.retrieve);

router.put('/lists/:id', lists.claim);

router.put('/lists/comments/:id', lists.comment);

router.post('/lists', lists.create);
router.delete('/lists/:id', lists.delete);
router.put('/lists/:id', lists.update);


module.exports = router;
