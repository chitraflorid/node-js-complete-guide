/*
 ***************************************************************
 *                                                             *
 * Lecture 69: Serving HTML Pages                              *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 6, 2019                                           *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * now takes the HTML files created in Lecture 68 and          *
 * responds to the defined HTTP requests with the static       *
 * HTML files.                                                 *
 *                                                             *
 * The next step as the course progresses will be to serve     *
 * dynamic HTML content using HTML template files.             *
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

app.use('/admin', adminRoutes);

// NOTE: Above, app.use is refactored by adding the URL 'filter' of '/admin'.
// Therefore, any requests that fall within adminRoutes will automatically
// prepend the '/admin' to whatever the rest of the URL request is.

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
