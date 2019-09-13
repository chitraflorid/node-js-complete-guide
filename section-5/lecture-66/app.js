/*
 ***************************************************************
 *                                                             *
 * Lecture 66: Adding a 404 Error Page                         *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 2, 2019                                           *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * adds a 404 Error page to act as a catchall for errant       *
 * routes that a user might enter.                             *
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

// Catchall Middleware:

app.use( (req, res, next) => {

    res.status(404).send('<h1>Page not found!</h1>');

}); // end app.use() catchall

// NOTE: This middleware omits a path as the default IS '/' and
// that should allow anything that comes after the site root.

// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
