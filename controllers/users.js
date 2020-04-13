const User = require('../models/users');


module.exports.index = function(request, response) {
  response.redirect('/users/charlietirrell99');
};

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
