const { Router: routerExpress } = require('express');

/*
  * Inyeccion de dependencias con Awilix:
  ? HomeController está declarado en startup/container.js
  */
function home({ HomeController }) {
  const router = routerExpress();

  router.get('/', HomeController.index);

  return router;
};

module.exports = home;
