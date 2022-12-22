const HomeService = require('./home.service');

module.exports = {
  HomeService,
  UserService: require('./user.service'),
  CommentService: require('./comment.service'),
  IdeaService: require('./idea.service')
};
