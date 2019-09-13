/*
 ***************************************************************
 *                                                             *
 * Lecture 59: Adding Middleware                               *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * This lecture explores adding middleware that intercepts     *
 * HTTP requests and passes the results back to Express so     *
 * that it may then send the response back to the app.         *
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

    console.log('In another middleware!\n');

    // TO DO: Send a response to app.

}); // end app.use()

// Initialize an HTTP server using app as the request handler:

const server = http.createServer(app);

// Set listening port for server:

server.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
