let _homeService = null;

class HomeController {
  /*
  * Inyeccion de dependencias con Awilix:
  ? HomeService está declarado en startup/container.js
  */
  constructor({ HomeService }) {
    _homeService = HomeService;
  }

  index(req, res) {
    return res.send(_homeService.index());
  }
}

module.exports = HomeController;
