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

// POST /courses (with the new course in the request body)
module.exports.create = function(request, response, next) {
  console.log(typeof request.body);
  var myJSON = JSON.stringify(request.body);
  const li = myJSON.split(',');
  List.create({items: li, customerID: request.session.user._id, title: request.session.user._id's list'})
    .then(list => response.status(201).send(list.id))
    .catch(error => next(error));
};

// DELETE /courses/:id
module.exports.delete = function(request, response, next) {
  List.findByIdAndDelete(request.params.id)
    .then(list => list ? response.status(200).end() : next())
    .catch(error => next(error));
};

// PUT /courses/:id (with the changes in the request body)
/*
module.exports.update = function(request, response, next) {
  Section.findByIdAndUpdate(request.params.id, request.body)
    .then(section => section ? response.status(200).end() : next())
    .catch(error => next(error));
};
*/
// Replace undefined with [] to remove all prereqs
/*
// POST /claim (with a user ID in the request body)
module.exports.claim = function(request, response, next) {
  List.findById(request.params.id)
    .then(function(list) {
      request.list.claimedBy= list;
      response.status(200).end();
    }).catch(error => next(error));
};
*/
module.exports.claim = function(request, response, next) {

  List.findByIdAndUpdate(request.params.id, {claimedBy: request.session.user._id})
    .then(list => list ? response.status(200).end() : next())
    .catch(error => next(error));
};

module.exports.comment = function(request, response, next) {

  List.findByIdAndUpdate(request.params.id, {comments: comments.push([request.session.user._id, request.body])})
    .then(list => list ? response.status(200).end() : next())
    .catch(error => next(error));
};
