const HomeRoutes = require('./home.routes');

module.exports = {
  HomeRoutes,
  UserRoutes: require('./user.routes'),
  IdeaRoutes: require('./idea.routes'),
  CommentRoutes: require('./comment.routes')
};
