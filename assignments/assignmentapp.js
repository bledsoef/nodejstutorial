const http = require('http');
const routes = require('./assignmentroutes');

const server = http.createServer(routes);

server.listen(3000);
