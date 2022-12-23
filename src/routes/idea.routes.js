const { Router: routerExpress } = require('express');
const { ParseintMiddleware } = require('../middlewares');

/*
  * Inyeccion de dependencias con Awilix:
  ? IdeaController está declarado en startup/container.js
  */
function idea({ IdeaController }) {
  const router = routerExpress();

  router.get('/:ideaId', IdeaController.get);
  router.get('', ParseintMiddleware.parseIntMidd, IdeaController.getAll);
  router.get('/:userId/all', IdeaController.getUserIdeas);
  router.post('', IdeaController.create);
  router.patch('/:ideaId', IdeaController.update);
  router.delete('/:ideaId', IdeaController.delete);
  router.post('/:ideaId/upvote', IdeaController.upVoteIdea);
  router.post('/:ideaId/downvote', IdeaController.upDownIdea);

  return router;
};

module.exports = idea;
