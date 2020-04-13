const User = require('../models/users');


module.exports.index = function(request, response) {
  response.redirect('/users/charlestirrell99')
};

module.exports.retrieve = function(request, response) {
  response.send(`GET /users/${request.params.id}`);
};
