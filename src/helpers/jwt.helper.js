const { sign } = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


function generateToken(user) {
  return sign({ user }, JWT_SECRET, { expiresIn: '4h' });
}

module.exports = {
  generateToken
};
