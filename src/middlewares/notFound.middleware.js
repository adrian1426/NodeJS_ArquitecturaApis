const notFoundMiddleware = (req, res, next) => {
  return res.status(404).send({
    status: 404,
    message: 'Resource not dound'
  });
};

module.exports = notFoundMiddleware;
