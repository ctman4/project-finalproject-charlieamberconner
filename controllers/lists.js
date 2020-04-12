const List = require('../models/lists');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'timePosted'; // Default to sort by course

  List.find().sort()
    .then(lists => response.render('lists/index', {lists: lists}))
    .catch(error => next(error));
};
