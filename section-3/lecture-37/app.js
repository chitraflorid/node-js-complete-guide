/*
 ***************************************************************
 *                                                             *
 * Lecture 37: Using the Node Module system.                   *
 *                                                             *
 * In this course module, I take the HTTP server created in    *
 * Lecture 25, and refactor the code so that it takes          *
 * advantage of the Node Module System.                        *
 *                                                             *
 ***************************************************************
*/

// Import core module dependencies:

const http  = require('http');  // Support HTTP protocol operations.

// Import local module dependencies:

const routes = require('./routes');

// BUILD AND CONFIGURE SERVER:

// Instantiate http server:

const server = http.createServer(routes);


//  Set listening port for server and invoke server:

server.listen(3000, () => {

    console.log('\nListening on port 3000...\n');

});
