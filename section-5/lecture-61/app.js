/*
 ***************************************************************
 *                                                             *
 * Lecture 61: Express.js--Looking Behind the Scenes           *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * explores how Express.js works behind the scenes and also    *
 * simplifies some server configuration based on enhancements  *
 * provided by Express.js.                                     *
 *                                                             *
 ***************************************************************
*/

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


// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
