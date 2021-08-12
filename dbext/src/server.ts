const app:any = require('./app')
const http:any  = require('http');
const port:number = 3005;

const server:any = http.createServer(app);

server.listen(port);
