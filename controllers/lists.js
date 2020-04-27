const List = require('../models/lists');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'timePosted'; // Default to sort by timePosted

  List.find().sort()
    .then(lists => response.render('lists/index', {lists: lists}))
    .catch(error => next(error));
};

// GET /lists/:id
module.exports.retrieve = function(request, response, next) {
  List.findById(request.params.id).then(function(list) {
    if (list) {
      response.render('lists/details', {list: list});
    } else {
      next(); // No such list
    }
  }).catch(error => next(error));
};
