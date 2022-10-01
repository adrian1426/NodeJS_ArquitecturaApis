const express = require('express');

let _express = null;
let _config = null;

class Server {
  constructor({ config, apiRoutes }) {
    _config = config;
    _express = express().use(apiRoutes);
  }

  start() {
    return new Promise((resolve) => {
      const { PORT, APPLICATION_NAME } = _config;

      _express.listen(PORT, () => {
        console.log(APPLICATION_NAME, ' Api running on port: ', PORT);
      });

      resolve();
    });
  }
};

module.exports = Server;
