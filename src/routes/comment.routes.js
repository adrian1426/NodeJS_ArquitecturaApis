const { Router: routerExpress } = require('express');

/*
  * Inyeccion de dependencias con Awilix:
  ? CommentController está declarado en startup/container.js
  */
function comment({ CommentController }) {
  const router = routerExpress();

  router.get('/:commentId', CommentController.get);
  router.get('/:ideaId/all', CommentController.getIdeaComments);
  router.patch('/:commentId', CommentController.update);
  router.delete('/:commentId', CommentController.delete);
  router.post('/:ideaId', CommentController.createComment);

  return router;
};

module.exports = comment;
