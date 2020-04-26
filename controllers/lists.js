const List = require('../models/lists');

// GET /sections?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'timePosted'; // Default to sort by course

  List.find().sort()
    .then(lists => response.render('lists/index', {lists: lists}))
    .catch(error => next(error));
};

// GET /lists/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    List.findById(request.params.id),
    List.distinct('_id')
  ];

  Promise.all(queries).then(function([list, listIDs]) {
    if (course) {
      response.render('list/index/details', {list: list, listIDs: listIDs});
    } else {
      next(); // No such list
    }
  }).catch(error => next(error));
};
