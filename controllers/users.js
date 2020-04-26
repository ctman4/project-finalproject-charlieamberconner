const User = require('../models/users');


module.exports.index = function(request, response) {
  response.redirect('/users');
};

/*
module.exports.retrieve = function(request, response, next) {
  User.findById(request.params.id)
  .then(function(user) {
    if (user) {
      response.render('users/index', {user: user});
    } else {
      next(); // No such user
    }
  }).catch(error => next(error));
};
*/

// POST /users
/*
module.exports.create = function(request, response, next) {
  User.create(request.body)
    .then(user => response.status(201).send(user.id))
    .catch(error => next(error));
};
*/

// POST /login (with a user ID in the request body)
module.exports.retrieve = function(request, response, next) {
  User.findById(request.body.id)
    .then(function(user) {
      if (user) {
        response.render('users/index', {user: user});
        request.session.user = user;
        response.status(200).end();
      } else {
        next(); // No such user
      }
    }).catch(error => next(error));
};
