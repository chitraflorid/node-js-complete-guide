/*
 ******************************************************************
 *                                                                *
 * app.js                                                         *
 *                                                                *
 * Robert Hieger                                                  *
 * September 8, 2019                                              *
 *                                                                *
 * This module is the entry point of the application. In it,      *
 * the Node.js server is built and configured, and all routing    *
 * is imported to this file to support responses to HTTP          *
 * requests.                                                      *
 *                                                                *
 * The Express.js third party module is used to construct the     *
 * aforementioned routes.                                         *
 *                                                                *
 ******************************************************************
*/

// IMPORT NECESSARY CORE MODULES:

const path = require('path');

// IMPORT NECESSARY THIRD PARTY MODULES:

// Routing services:

const express = require('express');

// Parsing services for the body of incoming HTTP requests:

const bodyParser = require('body-parser');

// Import custom modules:

const appRoutes = require('./routes/index');;

// Initialize Express application:

const app = express();

// Set request body parsing:

app.use( bodyParser.urlencoded( {extended: false} ) );

// Set up static file serving from '/public' folder:

app.use( express.static( path.join(__dirname, 'public') ) );

// Configure middleware:

app.use('/', appRoutes);


// Initialize HTTP Server:

app.listen(3000, ()  => {

    // Log listening port to console;

    console.log('\nHTTP Server listening on Port 3000...\n');

}); // end app.listen(3000)
