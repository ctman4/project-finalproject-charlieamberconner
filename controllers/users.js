const User = require('../models/users');


module.exports.index = function(request, response) {
  response.send('GET /users');
};

module.exports.retrieve = function(request, response) {
  response.send(`GET /users/${request.params.id}`);
};

// GET /users
/*
module.exports.index = function(request, response, next) {

};
*/
