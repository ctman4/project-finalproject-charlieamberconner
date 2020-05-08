const Comment = require('../models/comments');

module.exports.retrieve = function(request, response, next) {
  Comment.find({ list: request.query.list})
    .then(comments => response.render('lists/comments', {comments: comments}))
    .catch(error => next(error));
};

module.exports.comment = function(request, response, next) {
  List.create({list: request.params.list, customerID: request.session.user._id, text: request.body.text})
    .then(list => response.status(201).send(list.id))
    .catch(error => next(error));
};
