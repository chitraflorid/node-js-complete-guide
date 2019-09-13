/*
 *****************************************************************
 *                                                               *
 * app.js                                                        *
 *                                                               *
 * Robert Hieger                                                 *
 * August 17, 2019                                               *
 *                                                               *
 * This module is the entry point to the application and         *
 * contains primarily the code that instantiates and builds      *
 * the node.js server.                                           *
 *                                                               *
 *****************************************************************
*/


// Import core module dependencies:

const http = require('http');

// Import local module dependencies:

const router = require('./router');

// Instantiate a Node.js-based server:

const server = http.createServer(router);

// Set listening port for server:

server.listen(3000, () => {

    console.log('\nHTTP Server listening on Port 3000...\n');

}); // end server.listen()
