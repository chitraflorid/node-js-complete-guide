/*
 ***************************************************************
 *                                                             *
 * Lecture 65: Using Express Router                            *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 2, 2019                                           *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * begins the process of creating modules to better organize   *
 * code in the application.                                    *
 *                                                             *
 * Most importantly, this lecture introduces the Router        *
 * component of Express.js.                                    *
 *                                                             *
 ***************************************************************
*/

// Import necessary third party modules:

const express = require('express');

const bodyParser = require('body-parser');

// Import custom modules:

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');


// Initialize Express app:

const app = express();

// Set request body parsing:

app.use( bodyParser.urlencoded( {extended: false} ) );

// Configure middleware:

app.use(adminRoutes);

app.use(shopRoutes);

// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
