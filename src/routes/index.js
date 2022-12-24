/* eslint-disable max-len */
/* eslint-disable new-cap */
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { notFoundMiddleware, errorMiddleware, authMiddleware } = require('../middlewares');
const swaggerUi = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

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
  apiRoutes.use('/user', authMiddleware.verifyToken, UserRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/idea', IdeaRoutes);
  apiRoutes.use('/auth', AuthRoutes);

  router.use('/v1/api', apiRoutes);
  router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);
  return router;
};

module.exports = routes;
