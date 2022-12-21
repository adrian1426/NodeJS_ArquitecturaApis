const { createContainer, asValue, asClass, asFunction } = require('awilix');

// ?Config
const config = require('../config');
const server = require('./index');

// ?Services
const { HomeService } = require('../services');

// ?controllers
const { HomeController } = require('../controllers');

// ?routes
const { HomeRoutes } = require('../routes/index.routes');
const apiRoutes = require('../routes');

// ?models
const { User, Comment, Idea } = require('../models');

// ?repositories
const {
  UserRepository, CommentRepository, IdeaRepository
} = require('../repositories');

const container = createContainer();

container
  .register({
    HomeService: asClass(HomeService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
  })
  .register({
    apiRoutes: asFunction(apiRoutes).singleton(),
    config: asValue(config),
    server: asClass(server).singleton()
  })
  .register({
    User: asValue(User),
    Comment: asClass(Comment),
    Idea: asClass(Idea)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton()
  });

module.exports = container;
