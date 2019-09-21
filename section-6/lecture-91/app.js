/*
 ***************************************************************
 *                                                             *
 * Lecture 91: Wrap Up                                         *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 21, 2019                                          *
 *                                                             *
 * This lecture wraps up the concepts covered in Section 6     *
 * of the course. In this lecture, the project now commits     *
 * to using EJS as its templating engine.                      *
 *                                                             *
 * In this lecture, therefore, superfluous elements from       *
 * previous lectures are deleted.                              *
 *                                                             *
 ***************************************************************
*/

// Import necessary core modules:

const path = require('path');

// Import necessary third party modules:

const express = require('express');

const bodyParser = require('body-parser');

// Import custom modules:

const adminData = require('./routes/admin');

const shopRoutes = require('./routes/shop');


// Initialize Express app:

const app = express();

// Set view engine for the application:

app.set('view engine', 'ejs');

// Set path to templates:

app.set('views', 'views');

// NOTE: '/views' is the default path for templates in Express.
// This path is set here just to demonstrate how this is done.
// The only time this would be used in production is if a different
// path were chosen in which to store template files.

// Set request body parsing:

app.use( bodyParser.urlencoded( {extended: false} ) );

// Set up static file serving from /public folder:

app.use( express.static( path.join(__dirname, 'public') ) );

// Configure middleware:

app.use('/admin', adminData.routes);

// NOTE: Above, app.use is refactored by adding the URL 'filter' of '/admin'.
// Therefore, any requests that fall within adminRoutes will automatically
// prepend the '/admin' to whatever the rest of the URL request is.

app.use(shopRoutes);

// Catchall Middleware:

app.use( (req, res, next) => {

    res.status(404).render('404', {pageTitle: 'Page Not Found'});

}); // end app.use() catchall

// NOTE: This middleware omits a path as the default IS '/' and
// that should allow anything that comes after the site root.

// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
