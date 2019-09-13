/*
 ***************************************************************
 *                                                             *
 * Lecture 64: Limiting Middleware Execution                   *
 * to POST Requests                                            *
 *                                                             *
 * app.js                                                      *
 *                                                             *
 * Robert Hieger                                               *
 * September 1, 2019                                           *
 *                                                             *
 * Picking up where the last lecture left off, this lecture    *
 * demonstrates how to make sure that an HTTP request is       *
 * limited to the POST method. It is otherwise identical to    *
 * the application in Lecture 63.                              *
 *                                                             *
 ***************************************************************
*/

// Import necessary third party modules:

const express = require('express');

const bodyParser = require('body-parser');


// Initialize Express app:

const app = express();

// Set request body parsing:

app.use( bodyParser.urlencoded( {extended: false} ) );

// Configure middleware:

// NOTE: This middleware always runs because it is at the top position
// in the group of middleware.

app.use('/', (req, res, next) =>  {

    next(); // NOTE: This statement allows passing through to the next
            // middleware. This is why the '/add-product' or '/' routes
            // with responses work.

}); // end app.use('/')

app.use('/add-product', (req, res, next) => {

    // Send response:

    res.send(
        `<form action="/product" method="POST">
            <input type="text" name="title" />
            <button type="submit">Add Product</button>
        </form>
        `
        );

}); // end app.use()

app.post('/product', (req, res, next) => {

    // Log body of request to console:

    console.log(req.body);


    // NOTE: This statement only logs the content of the request body
    // to the console, but does not render it to a page.
    
    // ALSO, the current parsing of the body allows for both POST requests
    // and for GET requests, which we don't want. This will be addressed
    // in the next lecture.

    // Redirect to root URL:

    res.redirect('/');

});


// NOTE: This middleware must preceed the next one. Otherwise
// it would never have the opportunity to run. Middleware runs
// from top to bottom. The only thing that would make it possible
// for this to run if it came after the middleware appearing
// below is if THAT middleware called the next() function.

app.use('/', (req, res, next) => {

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
