const User = require('../models/users');


module.exports.index = function(request, response) {
  response.send('GET /users');
};


// GET /users
/*
module.exports.index = function(request, response, next) {

};
*/
