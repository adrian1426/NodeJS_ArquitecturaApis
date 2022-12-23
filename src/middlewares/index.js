const notFoundMiddleware = require('./notFound.middleware');
const errorMiddleware = require('./error.middleware');

module.exports = {
  notFoundMiddleware,
  errorMiddleware,
  authMiddleware: require('./auth.middleware'),
  ParseintMiddleware: require('./parseint.middleware'),
  CacheMiddleware: require('./cache.middleware')
};
