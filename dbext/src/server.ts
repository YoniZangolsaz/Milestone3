const app = require('./app')
const http  = require('http');
const port = 3005;

const server = http.createServer(app);

server.listen(port);
