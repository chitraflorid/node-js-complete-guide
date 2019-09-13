/*
 ***************************************************************
 *                                                             *
 * Lecture 58: Installing Express.js                           *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * This lecture explores installing Express.js in              *
 * preparation of creating a simple app to create a            *
 * server to serve simple web pages.                           *
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const http = require('http');

// Import necessary third party modules:

const express = require('express');

// Initialize Express app:

const app = express();

// Initialize an HTTP server using app as the request handler:

const server = http.createServer(app);

// Set listening port for server:

server.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});

// NOTE: At this stage of development on the app, nothing immediately
// noticeable is happening. There is no output from the app other than
// the console.log message that the server is working.

// No logic has thus far been set up to tend to the requests that might
// be sent to the server and to respond with an HTTP message containing
// the contents of a web page.
