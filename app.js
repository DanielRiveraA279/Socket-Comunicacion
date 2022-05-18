
require('dotenv').config() //para que tenga la config por defecto, y corra bien el server

const Server = require('./models/server');

const server = new Server();

server.listen();