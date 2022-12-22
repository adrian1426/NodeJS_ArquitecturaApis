const { Router: routerExpress } = require('express');

/*
  * Inyeccion de dependencias con Awilix:
  ? UserController está declarado en startup/container.js
  */
function user({ UserController }) {
  const router = routerExpress();

  router.get('/:userId', UserController.get);
  router.get('/', UserController.getAll);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
};

module.exports = user;
