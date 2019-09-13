const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

// cons server = http.createServer(routes.handler);  // Throws an error because "cons"
                                                     // is not a keyword

const server = http.createServer(routes.handler);

server.listen(3000);
