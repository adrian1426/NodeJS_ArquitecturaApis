const mongoose = require('mongoose');
const container = require('./src/startup/container');
const server = container.resolve('server');
const { MONGO_URI } = container.resolve('config');

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Conectado a Mongo correctamente');
    server.start();
  })
  .catch((err) => console.log(err));
