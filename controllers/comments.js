const Comment = require('../models/comments');

module.exports.comment = function(request, response, next) {
  Comment.find({ list: request.query.list})
    .then(lists => response.render('lists/comments', {lists: lists}))
    .catch(error => next(error));
};
