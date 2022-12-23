const { Router: routerExpress } = require('express');

/*
  * Inyeccion de dependencias con Awilix:
  ? AuthController está declarado en startup/container.js
  */
function auth({ AuthController }) {
  const router = routerExpress();

  router.post('/signup', AuthController.signUp);
  router.post('/signin', AuthController.signIn);

  return router;
};

module.exports = auth;
