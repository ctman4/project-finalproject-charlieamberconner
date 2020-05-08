const Comment = require('../models/comments');

module.exports.retrieve = function(request, response, next) {
  Comment.find({ list: request.query.list})
    .then(comments => response.render('lists/comments', {comments: comments}))
    .catch(error => next(error));
};
