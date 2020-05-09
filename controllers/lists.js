const List = require('../models/lists');
const Comment = require('../models/comments');

// GET /mylists?sort=
module.exports.index = function(request, response, next) {
  const order = request.query.sort || 'timePosted'; // Default to sort by timePosted

  List.find().sort()
    .then(lists => response.render('lists/index', {lists: lists, order: order}))
    .catch(error => next(error));
};


module.exports.unclaimed = function(request, response, next) {
  List.find({ claimedBy: undefined})
  .sort()
    .then(lists => response.render('lists/unclaimed', {lists: lists}))
    .catch(error => next(error));
};


module.exports.myclaimed = function(request, response, next) {
  const myID = request.session.user._id;
  List.find({ claimedBy: myID})
  .sort()
    .then(lists => response.render('lists/myclaimed', {lists: lists}))
    .catch(error => next(error));
};


module.exports.mylists = function(request, response, next) {
  const myID = request.session.user._id;
  List.find({ customerID: myID})
  .sort()
    .then(lists => response.render('lists/mylists', {lists: lists}))
    .catch(error => next(error));
};


// GET /lists/:id
module.exports.retrieve = function(request, response, next) {
  const queries = [
    List.findById(request.params.id),
    Comment.find({list: request.params.id})
  ]

  Promise.all(queries).then(function([list, comments]) {
    if (list) {
      response.render('lists/details', {list: list, comments: comments});
    } else {
      next(); // No such list
    }
  }).catch(error => next(error));
};

// GET /lists/

// POST /courses (with the new course in the request body)
module.exports.create = function(request, response, next) {
  List.create({items: request.body.items, customerID: request.session.user._id, title: request.body.title, timePosted: Date.now(), customerName: request.session.user.name})
    .then(list => response.status(201).send(list.id))
    .catch(error => next(error));
};

// DELETE /lists/:id
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
  Comment.create({list: request.params.id, customerID: request.session.user._id, text: request.body.text})
    .then(list => response.status(201).send(list.id))
    .catch(error => next(error));
};
