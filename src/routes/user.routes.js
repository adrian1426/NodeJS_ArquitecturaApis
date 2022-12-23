/* eslint-disable new-cap */
/* eslint-disable max-len */
const { Router: routerExpress } = require('express');
const { ParseintMiddleware, CacheMiddleware } = require('../middlewares');

/*
  * Inyeccion de dependencias con Awilix:
  ? UserController está declarado en startup/container.js
  */
function user({ UserController }) {
  const router = routerExpress();

  router.get('/:userId', UserController.get);
  router.get('/', [ParseintMiddleware.parseIntMidd, CacheMiddleware(60)], UserController.getAll);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
};

module.exports = user;
