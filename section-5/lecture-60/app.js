/*
 ***************************************************************
 *                                                             *
 * Lecture 60: How Middleware Works                            *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Picking up where the last lecture left off, now a response  *
 * will be added to the middleware.                            *
 *                                                             *
 ***************************************************************
*/


// Import necessary core modules:

const http = require('http');

// Import necessary third party modules:

const express = require('express');

// Initialize Express app:

const app = express();

// Configure middleware:

app.use( (req, res, next) => {

    console.log('\nIn the middleware!\n');

    next(); // Allows request to move to the next middleware in line

}); // end app.use()

app.use( (req, res, next) => {

    console.log('In anoher middleware!\n');

    // Send response:

    res.send('<h1>Hello from Express!</h1>');

}); // end app.use()

// Initialize an HTTP server using app as the request handler:

const server = http.createServer(app);

// Set listening port for server:

server.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
