/*
 ***************************************************************
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * User List Application                                       *
 *                                                             *
 * Robert Hieger                                               *
 * September 21, 2019                                          *
 *                                                             *
 * This module is the entry point to the User List app, and    *
 * contains the Node.js server logic, as well as all critical  *
 * imports and hooks to other parts of the application.        *
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const path = require('path');

// Import 3rd Party Modules:

const express = require('express');

// Initialize Express application:

const app = express();

// Set application view engine:

app.set('view engine', 'ejs');

// Set path to view engine templates:

app.set('views', 'views');  // NOTE: This is by default, so this command is explicit,
                            // not necessary.

// Set listening port for Express Server:

app.listen(3000, (request, response, next) => {

    // Log status to console:

    console.log('\nServer listening at port 3000...\n');

});
