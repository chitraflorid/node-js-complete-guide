/*
 ***************************************************************
 *                                                             *
 * Lecture 73: Serving Files Statically                        *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 7, 2019                                           *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * explores serving files statically. Specifically, it begins  *
 * to address the issue of having a means to statically serve  *
 * external CSS style files. In the previous lecture, the      *
 * styles were sub-optimally embedded in each HTML file.       *                               
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const path = require('path');

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

// Set up static file serving from /public folder:

app.use( express.static( path.join(__dirname, 'public') ) );

// Configure middleware:

app.use('/admin', adminRoutes);

// NOTE: Above, app.use is refactored by adding the URL 'filter' of '/admin'.
// Therefore, any requests that fall within adminRoutes will automatically
// prepend the '/admin' to whatever the rest of the URL request is.

app.use(shopRoutes);

// Catchall Middleware:

app.use( (req, res, next) => {

    res.status(404).sendFile( path.join(__dirname, 'views', '404.html') );

}); // end app.use() catchall

// NOTE: This middleware omits a path as the default IS '/' and
// that should allow anything that comes after the site root.

// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
