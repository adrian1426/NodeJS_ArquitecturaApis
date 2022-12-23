/* eslint-disable max-len */
const { createContainer, asValue, asClass, asFunction } = require('awilix');

// ?Config
const config = require('../config');
const server = require('./index');

// ?Services
const {
  HomeService, CommentService, IdeaService, UserService, AuthService
} = require('../services');

// ?controllers
const {
  HomeController, CommentController, IdeaController, UserController, AuthController
} = require('../controllers');

// ?routes
const {
  HomeRoutes, CommentRoutes, IdeaRoutes, UserRoutes, AuthRoutes
} = require('../routes/index.routes');
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
    HomeService: asClass(HomeService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton()
  })
  .register({
    apiRoutes: asFunction(apiRoutes).singleton(),
    config: asValue(config),
    server: asClass(server).singleton()
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton()
  });

module.exports = container;
