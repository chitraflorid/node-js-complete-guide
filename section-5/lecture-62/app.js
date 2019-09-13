/*
 ***************************************************************
 *                                                             *
 * Lecture 62: Handling Different Routes                       *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * now begins the process of building something more           *
 * meaningful by handling routes to different URLs. This is    *
 * another key element of what Express.js offers.              *
 *                                                             *
 ***************************************************************
*/

// Import necessary third party modules:

const express = require('express');

// Initialize Express app:

const app = express();

// Configure middleware:

// NOTE: This middleware always runs because it is at the top position
// in the group of middleware.

app.use('/', (req, res, next) =>  {

    console.log('\nThis always runs...\n');

    next(); // NOTE: This statement allows passing through to the next
            // middleware. This is why the '/add-product' or '/' routes
            // with responses work.

}); // end app.use('/')

app.use('/add-product', (req, res, next) => {

    console.log('In anoher middleware!\n');

    // Send response:

    res.send('<h1>The "Add Product" Page</h1>');

}); // end app.use()

// NOTE: This middleware must preceed the next one. Otherwise
// it would never have the opportunity to run. Middleware runs
// from top to bottom. The only thing that would make it possible
// for this to run if it came after the middleware appearing
// below is if THAT middleware called the next() function.

app.use('/', (req, res, next) => {

    console.log('In anoher middleware!\n');

    // Send response:

    res.send('<h1>Hello from Express!</h1>');

}); // end app.use()

// NOTE: The path specified in this middleware above does not
// specify that the route is to the root path, but that the
// route STARTS with the root path. This is a very important
// distinction, because any other path may be appended.


// Initialize an HTTP server using simplified Express.js syntax:

app.listen(3000, () => {

    // Log message to console confirming server operation:
    
    console.log('\nHTTP Server listening on port 3000...\n');

});
