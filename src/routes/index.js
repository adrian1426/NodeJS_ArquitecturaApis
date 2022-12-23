/* eslint-disable max-len */
/* eslint-disable new-cap */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { notFoundMiddleware, errorMiddleware } = require('../middlewares');

require('express-async-errors');

/*
  * Inyeccion de dependencias con Awilix:
  ? HomeRoutes,CommentRoutes,IdeaRoutes,UserRoutes está declarado en startup/container.js
*/
function routes({ HomeRoutes, UserRoutes, CommentRoutes, IdeaRoutes, AuthRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes
    .use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

  apiRoutes.use('/home', HomeRoutes);
  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/idea', IdeaRoutes);
  apiRoutes.use('/auth', AuthRoutes);

  router.use('/v1/api', apiRoutes);

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);
  return router;
};

module.exports = routes;
