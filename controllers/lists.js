const List = require('../models/list');

// GET /lists
module.exports.index = function(request, response, next) {
  List.distinct('_id')
    .then(listIDs => response.redirect(`/lists/${listIDs[0]}`))
    .catch(error => next(error));
};

// GET /lists/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    List.findById(request.params.id),
    List.distinct('_id')
  ];

  Promise.all(queries).then(function([list, listIDs]) {
    if (list) {
      response.render('lists/index', {list: list, listIDs: listIDs});
    } else {
      next(); // No such list
    }
  }).catch(error => next(error));
};
