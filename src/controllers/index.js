const HomeController = require('./home.controller');

module.exports = {
  HomeController,
  UserController: require('./user.controller'),
  CommentController: require('./comment.controller'),
  IdeaController: require('./idea.controller'),
  AuthController: require('./auth.controller')
};
