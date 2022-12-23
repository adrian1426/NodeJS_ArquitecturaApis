/* eslint-disable space-before-function-paren */
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function verifyToken(req, res, next) {
  const token = req.headers['Authorization'];

  if (!token) {
    const error = new Error();
    error.status = 404;
    error.message = 'Token must be sent';

    throw error;
  }

  jwt.verify(token, JWT_SECRET, function (err, decodedToken) {
    if (err) {
      const error = new Error();
      error.status = 401;
      error.message = 'Invalid token';

      throw error;
    }

    req.user = decodedToken.user;
    next();
  });
}

module.exports = {
  verifyToken
};
