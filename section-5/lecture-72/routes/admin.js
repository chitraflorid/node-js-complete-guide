/*
 ***************************************************************
 *                                                             *
 * admin.js                                                    *
 *                                                             *
 * Robert Hieger                                               *
 * September 6, 2019                                           *
 *                                                             *
 * This module contains the routing logic for the Admin page   *
 * that allows addition of products to the online store in     *
 * this sample application.                                    *
 *                                                             *
 ***************************************************************
*/


// Import required core modules:

const path = require('path');

// Import required third party modules:

const express = require('express');

// Import custom module:

const rootDir = require('../util/path');

// Initialize Router service:

const router = express.Router();

// ROUTES:

router.get('/add-product', (req, res, next) => {

    // Send response:

    // NOTE: The command below is a refactoring of the commented-out
    // code that follows it.

    res.sendFile( path.join(rootDir, 'views', 'add-product.html') );

    // res.sendFile( path.join(__dirname, '..', 'views', 'add-product.html) );

    // NOTE: The double dots above (..) denote the same thing as
    // '../' in UNIX-based systems or '..\' on Windows. It is
    // therefore preferrable, and even correct to have only the
    // two dots so as to be more correct for either OS file system.

}); // end router.use()

router.post('/add-product', (req, res, next) => {

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

// Export router for use in other modules:

module.exports = router;
