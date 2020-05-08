const express = require('express');
const users = require('./controllers/users');
const lists = require('./controllers/lists');
const comments = require('./controllers/comments');

const router = express.Router();


// Check for admin status
const authorize = function(request, response, next) {
  if (request.session.user) {
    next(); // Fulfill the request
  } else {
    response.status(401).end();
  }
};


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
router.get('/users', authorize, users.index);

router.get('/users/:id', authorize, users.retrieve);

// Handle list requests
router.get('/lists', authorize, lists.index);
router.get('/lists/unclaimed', authorize, lists.unclaimed);
router.get('/lists/myclaimed', authorize, lists.myclaimed);
router.get('/lists/mylists', authorize, lists.mylists);

// Handle getting lists by id, my claimed lists, and my lists
router.get('/lists/:id', authorize, lists.retrieve);
router.put('/lists/:id', authorize, lists.claim);
router.post('/lists', authorize, lists.create);
router.delete('/lists/:id', authorize, lists.delete);

router.get('/comments', authorize, comments.retrieve)
router.post('/comments/:list', authorize, comments.comment);


module.exports = router;
